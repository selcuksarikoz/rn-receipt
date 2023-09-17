import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StatusBar,
  Text,
  useColorScheme,
} from "react-native";
import { Button, Center, FlatList, Flex, Stack, View } from "native-base";
import SplashScreen from 'react-native-splash-screen'

import { AppSafeAreaView, AppButton, AppEmpty } from "@components";
import { AppTags } from "@components/tags";
import { AppFood } from "@components/food";
import { Lang } from "@utils/langs";
import { Http } from "@utils";
import { Colors, URLS } from "@constants";
import { HomeModule } from "./home.interface";
import { LRUCache } from "@utils/lru-cache";

import { styles } from "./home.style"

export function AppHomeScreen(props: HomeModule.IHomeScreenProps): JSX.Element {

  const { navigation } = props

  const isDarkMode = useColorScheme() === "dark";

  const animated = useRef(new Animated.Value(1))

  const [showBar, setShowBar] = useState(true)
  const [materials, setMaterials] = useState<Set<string>>()
  const [foods, setFoods] = useState<IFoodItem[]>([])
  const [loading, setLoading] = useState(false)

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  const translateYInterpolate = animated.current.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, 0],
  });

  const animatedStyles = {
    opacity: animated.current,
    backgroundColor: Colors.primary,
    transform: [
      {
        translateY: translateYInterpolate,
      },
    ],
  };

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  useLayoutEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content")
  }, [])

  const fetchSearch = useCallback(() => {
    if (!materials?.size) return

    setLoading(true)

    const keys = [...materials].join(",")
    const lruCache = LRUCache.getCache(keys)

    if (lruCache) {
      setLoading(false)
      return setFoods(lruCache as IFoodItem[])
    }

    Http().Post<IFoodItemRequest, IFoodItem[]>(URLS.search, {
      limit: 100,
      text: keys
    })
      .then(res => {
        LRUCache.setCache(keys, res)
        return res
      })
      .then(setFoods)
      .catch(err => console.error)
      .finally(() => setLoading(false))
  }, [materials])

  function onPress(params: IFoodItem) {
    navigation.push("Detail", params)
  }

  function onScroll(event: NativeSyntheticEvent<NativeScrollEvent>){
    const dimension = Dimensions.get("window").height / 2
    const scrollY = event.nativeEvent.contentOffset.y
    if(scrollY > dimension) {
      Animated.spring(animated.current, {
        toValue: 0,
        useNativeDriver: true
      }).start(() => {
        setTimeout(setShowBar, 750, false)
      })
    } else {
      Animated.spring(animated.current, {
        toValue: 1,
        useNativeDriver: true
      }).start(() => {
        setTimeout(setShowBar, 750, true)
      })
    }
  }

  return (
    <AppSafeAreaView>

      <Flex style={styles.container}>

        <Animated.View
          style={[animatedStyles, { display: showBar ? "flex" : "none" }]}
        >
          <View p={3} style={{gap: 10}}>
            <AppTags
              onChange={setMaterials}
            />
            {
              materials?.size ? (
                <Button
                  size={"sm"}
                  variant={"subtle"}
                  onPress={fetchSearch}
                  disabled={loading}
                >
                  {Lang.t("Search")}
                </Button>
              ) : null
            }
          </View>
        </Animated.View>

        {
          loading ? (
            <Stack flex={1}>
              <Center flex={1} justifyContent={"center"}>
                <ActivityIndicator />
              </Center>
            </Stack>
          ) : (
            <View flex={2}>
              <FlatList
                columnWrapperStyle={{
                  gap: 10,
                  marginBottom: 20
                }}
                numColumns={2}
                p={4}
                data={foods}
                renderItem={({ item }) => <AppFood detail={item} onPress={onPress} />}
                // ItemSeparatorComponent={() => <View style={{ marginBottom: 15, marginTop: 15 }} />}
                keyExtractor={item => item.id.toString()}
                ListEmptyComponent={<AppEmpty title={Lang.t("AddMaterialAndSearch")} />}
                onScroll={onScroll}
              />
            </View>
          )
        }

      </Flex>

    </AppSafeAreaView>
  );
}
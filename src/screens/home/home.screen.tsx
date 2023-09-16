import React, { useCallback, useEffect, useLayoutEffect, useState } from "react";
import {
  ActivityIndicator,
  StatusBar,
  Text,
  useColorScheme,
} from "react-native";
import { Button, Center, Container, Flex, ScrollView, Stack, VStack } from "native-base";
import SplashScreen from 'react-native-splash-screen'

import { AppSafeAreaView, AppButton } from "@components";
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

  const [materials, setMaterials] = useState<Set<string>>()
  const [foods, setFoods] = useState<IFoodItem[]>([])
  const [loading, setLoading] = useState(false)

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  useLayoutEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content")
  }, [])

  const fetchSearch = useCallback(() => {
    if(!materials?.size) return

    setLoading(true)

    const keys = [...materials].join(",") 
    const lruCache = LRUCache.getCache(keys)

    if(lruCache) {
      setLoading(false)
      return setFoods(lruCache as IFoodItem[])
    }

    const results = Http().Post<IFoodItemRequest, IFoodItem[]>(URLS.search, {
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

  function onPress(params: IFoodItem){
    navigation.push("Detail", params)
  }

  return (
    <AppSafeAreaView>

      <Flex style={styles.container}>
        
          <Flex 
            p={2}
            backgroundColor={Colors.primary}
            width={"100%"}
            style={{gap: 10}}
          >
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
          </Flex>

        {
          loading ? (
            <Stack flex={1}>
              <Center flex={1} justifyContent={"center"}>
                <ActivityIndicator/>
              </Center>
            </Stack>
          ) : (
            <ScrollView flex={2}>
              <VStack space={3} p={3}>
                {
                  !foods.length ?
                    <Center flex={1}>
                      <Text>Add Material and Search!</Text>
                    </Center>

                    : foods.map(it => <AppFood detail={it} key={it.id} onPress={onPress} />)
                }
              </VStack>
            </ScrollView>
          )
        }

      </Flex>

    </AppSafeAreaView>
  );
}
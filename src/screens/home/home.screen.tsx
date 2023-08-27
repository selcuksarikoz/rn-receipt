import React, { useLayoutEffect, useState } from "react";
import {
  StatusBar,
  Text,
  TouchableNativeFeedback,
  useColorScheme,
  View,
} from "react-native";

import { AppSafeAreaView, AppButton } from "@components";
import { AppTags } from "@components/tags";
import { AppFood } from "@components/food";
import { Lang } from "@utils/langs";

import { styles } from "./home.style"
import { Http } from "@utils";
import { Colors, URLS } from "@constants";
import { Button, Container, Flex, ScrollView, VStack } from "native-base";

export function AppHomeScreen(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const [materials, setMaterials] = useState<Set<string>>()

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  useLayoutEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content")
  }, [])

  function fetchSearch(){
    const results = Http().Get<IFoodItemRequest, IFoodItem[]>(URLS.search, {
      limit: 1,
      text: "asdasd"
    })
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
              >
                {Lang.t("Search")}
              </Button>
            ) : null
          }
          </Flex>

        <ScrollView flex={2}>
          <VStack space={3} p={3}>
            <AppFood />
            <AppFood />
            <AppFood />
            <AppFood />
          </VStack>
        </ScrollView>

      </Flex>

    </AppSafeAreaView>
  );
}
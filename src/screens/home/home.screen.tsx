import React, { useLayoutEffect, useState } from "react";
import {
  StatusBar,
  Text,
  TouchableNativeFeedback,
  useColorScheme,
  View,
} from "react-native";

import { AppSafeAreaView } from "@components";
import { AppTags } from "@components/tags";
import { AppFood } from "@components/food";
import { Lang } from "@utils/langs";

import { styles } from "./home.style"
import { TouchableOpacity } from "react-native-gesture-handler";

export function AppHomeScreen(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const [materials, setMaterials] = useState<Set<string>>()

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  useLayoutEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content")
  }, [])

  return (
    <AppSafeAreaView>

      <View style={styles.container}>
        
          <View style={styles.header}>
            <AppTags 
              onChange={setMaterials}
            />

          {
            materials?.size ? (
              <TouchableOpacity
                style={styles.button}
              >
                <Text>{Lang.t("Search")}</Text>
              </TouchableOpacity>
            ) : null
          }
          </View>

        <View style={styles.list}>
          <AppFood />
          <AppFood />
          <AppFood />
          <AppFood />
        </View>

      </View>

    </AppSafeAreaView>
  );
}
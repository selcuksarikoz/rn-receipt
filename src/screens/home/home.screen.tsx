import React, { useLayoutEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { AppSafeAreaView } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";

export function AppHomeScreen(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useLayoutEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content")
  }, [])

  return (
    <AppSafeAreaView>

      <View style={styles.container}>
        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis nesciunt ratione consectetur quos, officia odio itaque rerum quis cumque sint odit, amet voluptatem. Nam, unde blanditiis natus sunt a corrupti.

        </Text>
      </View>

    </AppSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

import { Text } from "react-native";
import { useLayoutEffect } from "react";

import { AppSafeAreaView } from "@components";

import { AppScreen } from "./login.interfaces";

export function AppLoginScreen(props: AppScreen.IAppLoginScreenProps) {

  const { navigation } = props;

  useLayoutEffect(() => {
    setTimeout(() => {
      navigation.replace("Main")
    }, 2000)
  }, []);

  return (
    <AppSafeAreaView>
      <Text>Login</Text>
    </AppSafeAreaView>
  );
}
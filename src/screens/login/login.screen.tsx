import { Text } from "react-native";
import { AppSafeAreaView } from "../../components";
import { useEffect, useLayoutEffect } from "react";
import type { StackScreenProps } from "@react-navigation/stack";

interface IAppLoginScreenProps extends StackScreenProps<any> {

}

export function AppLoginScreen(props: IAppLoginScreenProps) {
  
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
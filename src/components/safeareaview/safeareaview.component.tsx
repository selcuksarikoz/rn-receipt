import { SafeAreaView } from "react-native";

import { AppSafeAreaModule } from "./safeareaview.interfaces"

import { styles } from "./safeareview.style"

export function AppSafeAreaView(props: AppSafeAreaModule.IAppSafeAreaViewProps) {
  const { children } = props;
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

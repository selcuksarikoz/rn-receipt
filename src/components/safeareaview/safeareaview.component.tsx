import { SafeAreaView, StyleSheet } from "react-native";

interface IAppSafeAreaViewProps {
  children: JSX.Element;
}

export function AppSafeAreaView(props: IAppSafeAreaViewProps) {
  const { children } = props;
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

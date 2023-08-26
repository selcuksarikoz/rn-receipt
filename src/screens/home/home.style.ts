import { StyleSheet } from "react-native";

import { Colors } from "@constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  list: {
    padding: 10,
    gap: 10,
    flex:1,
    backgroundColor: "#ccc"
  },
  header: {
    gap: 10,
    padding: 10,
    backgroundColor: Colors.primary,
  },
  button: {
    paddingVertical: 10,
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    alignItems: "center"
  }
});

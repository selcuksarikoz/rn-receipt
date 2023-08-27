import { StyleSheet } from "react-native";
import { Colors } from "@constants";

export const styles = StyleSheet.create({
  container: {
    width: 200,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 10,
    borderRadius: 10
  },
  primary: {
    backgroundColor: Colors.primary
  },
  secondary: {
    backgroundColor: Colors.secondary
  },
  text: {
    color: Colors.white,
    fontWeight: "600"
  },
  leftIcon: {
    alignItems: "flex-start"
  },
  rightIcon: {
    alignItems: "flex-end"
  }
})
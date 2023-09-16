import { Colors } from "@constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    borderRadius: 10,
    minHeight: 100,
  },
  image: {
    width: 100,
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#ddd"
  }
})
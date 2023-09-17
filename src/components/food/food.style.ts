import { Colors } from "@constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "column",
    backgroundColor: Colors.white,
    borderRadius: 10,
    minHeight: 100,
  },
  image: {
    width: "100%",
    height: 100,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10
  },
  button: {
    position: "absolute",
    right: 10,
    top: 10
  }
})
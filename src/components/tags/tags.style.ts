import { Colors } from "@constants";
import { StyleSheet } from "react-native";

const MIN_HEIGHT = 20

export const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  scrollView: {
    flexDirection: "row",
    gap: 10,
    height: 30,
  },
  wrapper: {
    backgroundColor: Colors.white,
    alignItems: "flex-start",
    borderRadius: 5,
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap"
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  closeButton: {
    paddingRight: 10
  }
})
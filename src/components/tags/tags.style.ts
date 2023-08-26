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
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    width: "100%",
    gap: 10,
    flexWrap: "wrap"
  },
  tagItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    minHeight: MIN_HEIGHT,
    gap: 5,
    backgroundColor: Colors.secondary
  },
  input: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    minHeight: MIN_HEIGHT,
    borderWidth: 0.6,
    borderColor: Colors.border,
    minWidth: 100,
    maxWidth: 200,
    borderRadius: 10,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  closeButton: {
    paddingRight: 10
  }
})
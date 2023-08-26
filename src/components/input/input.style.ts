import { StyleSheet } from "react-native";

const icon = {
  top: 12,
  display: "flex",
  height: 40,
  position: "absolute",
  alignSelf: "center",
};

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex:1,
    position: "relative",
  },
  leftIcon: {
    ...icon,
    left: 15,
  },
  rightIcon: {
    ...icon,
    right: 15,
  },
  input: {
    height: 40,
    backgroundColor: "#fff",
    width: "100%",
    alignSelf: "center",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    paddingLeft: 40,
  }
})
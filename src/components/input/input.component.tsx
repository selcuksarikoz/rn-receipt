import { TextInput, View } from "react-native";

import { AppInputModule } from "./input.interfaces"
import { Lang } from "@utils/langs";

import { styles } from "./input.style"

export function AppInput(props: AppInputModule.IAppInputProps) {

  const { leftIcon, rightIcon } = props

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        returnKeyLabel={Lang.t("Search")}
      />
      {leftIcon && (
        <View style={styles.leftIcon}>{leftIcon}</View>
      )}
      {rightIcon && (
        <View style={styles.rightIcon}>{rightIcon}</View>
      )}
    </View>
  )
}
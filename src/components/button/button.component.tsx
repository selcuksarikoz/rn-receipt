import { useState } from "react";
import { Text, View, TouchableOpacity, GestureResponderEvent } from "react-native";

import { ButtonModule } from "./button.interface";
import { Lang } from "@utils";

import { styles } from "./button.style"

export function AppButton(props: ButtonModule.IButtonProps) {
  const { text, color = "primary", leftIcon, rightIcon, onPress, ...rest } = props

  const [isLoading, setLoading] = useState<boolean>(false)

  // @ts-ignore
  const bodyColor = styles[color]

  function _onPress(event: GestureResponderEvent) {
    setLoading(true)

    if (typeof onPress === "function") {
      onPress(event)
    }

    console.log(event)

    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <TouchableOpacity
      {...rest}
      style={[styles.container, bodyColor]}
      onPress={_onPress}
    >
      {
        isLoading ? (
          <Text>{Lang.t("Loading")}</Text>
        ) : (
          <>
            {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
            <Text style={styles.text}>{text}</Text>
            {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
          </>
        )
      }
    </TouchableOpacity>
  )
}
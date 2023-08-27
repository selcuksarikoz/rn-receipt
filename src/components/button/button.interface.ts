import { TouchableOpacityProps } from "react-native";

export module ButtonModule {
  export interface IButtonProps extends TouchableOpacityProps {
    text: string
    color?: "primary" | "secondary",
    leftIcon?: JSX.Element
    rightIcon?: JSX.Element
  }
}
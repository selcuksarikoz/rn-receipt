import { TextInputProps } from "react-native";

export module AppInputModule {
  export interface IAppInputProps extends TextInputProps {
    leftIcon?: JSX.Element
    rightIcon?: JSX.Element
    innerRef?: any
  }
}
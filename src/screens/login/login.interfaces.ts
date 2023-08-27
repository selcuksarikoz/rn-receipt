import { StackScreenProps } from "@react-navigation/stack";

export module LoginModule {
  export interface IAppLoginScreenProps extends StackScreenProps<any> {

  }

  export interface ILogin {
    username: string | undefined,
    password: string | undefined
  }
}
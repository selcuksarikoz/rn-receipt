import { StackScreenProps } from "@react-navigation/stack";

export module RegisterModule {
  export interface IAppRegisterScreen extends StackScreenProps<any> {

  }

  export interface IRegister {
    username: string | undefined
    email: string | undefined
    password: string | undefined
    access_token?: string
  }
}
import { StackScreenProps } from "@react-navigation/stack";

export module DetailModule {
  export interface IFoodDetailProps extends StackScreenProps<any> {
    detail?: IFoodItem
  }
}
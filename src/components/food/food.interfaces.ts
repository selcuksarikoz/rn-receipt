export module AppFoodModule {
  export interface IAppFoodProps {
    detail: IFoodItem
    onPress: (item: IFoodItem) => void
  }
}
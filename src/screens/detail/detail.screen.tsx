import { Text, View } from "native-base"

import { DetailModule } from "./detail.interface"
import { useEffect, useLayoutEffect } from "react"

export function AppDetailScreen(props: DetailModule.IFoodDetailProps) {

  const { navigation, route: { params } } = props
  const { title, ingredients, directions } = params as IFoodItem

  useLayoutEffect(() => {
    navigation.setOptions({
      title
    })
  }, [title])

  return (
    <View>
    </View>
  )
}
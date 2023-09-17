import { ScrollView, Stack, Text, View } from "native-base"
import { useLayoutEffect } from "react"

import { DetailModule } from "./detail.interface"
import { Lang } from "@utils"

export function AppDetailScreen(props: DetailModule.IFoodDetailProps) {

  const { navigation, route: { params } } = props
  const { title, ingredients, directions, NER } = params as IFoodItem

  useLayoutEffect(() => {
    navigation.setOptions({
      title
    })
  }, [title])

  return (
    <ScrollView flex={1}>
      <Text textAlign={"center"} fontFamily={"heading"} fontSize={"lg"} mt={4} mb={2} fontWeight={"bold"}>{title}</Text>

      <Stack flexDirection={"column"} p={3} space={2}>
        <Text fontFamily={"heading"} fontSize={"md"} fontWeight={"bold"}>{Lang.t("Materials")}</Text>
        <Text>{NER.join(", ")}</Text>
      </Stack>

      <Stack flexDirection={"column"} p={3} space={2}>
        <Text fontFamily={"heading"} fontSize={"md"} fontWeight={"bold"}>{Lang.t("Ingredients")}</Text>
        {
          ingredients.map((it, index)=> <Text key={`${it}_${index}`}>👉 {it}</Text>)
        }
      </Stack>

      <Stack flexDirection={"column"} p={3} space={2}>
        <Text fontFamily={"heading"} fontSize={"md"} fontWeight={"bold"}>{Lang.t("Directions")}</Text>
        {
          directions.map((it, index)=> <Text key={`${it}_${index}`}>👉 {it}</Text>)
        }
      </Stack>

      <Text fontFamily={"heading"} color={"blue.900"} fontSize={"2xl"} mt={6} textAlign={"center"} fontWeight={"bold"}>{Lang.t("Enjoy")}</Text>
    </ScrollView>
  )
}
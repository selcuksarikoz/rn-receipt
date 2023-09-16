import { useEffect, useLayoutEffect, useState } from "react";
import { Center, ScrollView, Text, VStack, View } from "native-base";

import { AppFood, AppSafeAreaView } from "@components";
import { LocalCache } from "@utils/local-cache";
import { FavoritesModule } from "@screens/favorites/favorites.interface";

export function AppFavoritesScreen(props: FavoritesModule.IFavoritesProps) {

  const { navigation } = props

  const [foods, setFoods] = useState<IFoodItem[]>([])

  useEffect(() => {
    navigation.addListener('focus', getFavoriteds);
  }, [])

  async function getFavoriteds() {
    const s = await LocalCache.getAllData()
    if(s!==null) {
      setFoods(s as IFoodItem[])
    }
  }

  return (
    <AppSafeAreaView>
      <ScrollView flex={2}>
        <VStack space={3} p={3}>
          {
            !foods.length ?
              <Center flex={1}>
                <Text>You haven't favoriteds yet...</Text>
              </Center>

              : foods.map(it => <AppFood detail={it} key={it.id} />)
          }
        </VStack>
      </ScrollView>
    </AppSafeAreaView>
  )
}
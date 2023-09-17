import { useEffect, useState } from "react";
import { Center, FlatList, ScrollView, Text, VStack, View } from "native-base";

import { AppEmpty, AppFood, AppSafeAreaView } from "@components";
import { LocalCache } from "@utils/local-cache";
import { FavoritesModule } from "@screens/favorites/favorites.interface";
import { Lang } from "@utils";

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

  function onPress(params: IFoodItem) {
    navigation.push("Detail", params)
  }

  return (
    <AppSafeAreaView>
      <FlatList
        columnWrapperStyle={{
          gap: 10,
          marginBottom: 20
        }}
        numColumns={2}
        p={4}
        data={foods}
        renderItem={({ item }) => <AppFood detail={item} onPress={onPress} />}
        // ItemSeparatorComponent={() => <View style={{ marginBottom: 15, marginTop: 15 }} />}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={<AppEmpty title={Lang.t("AddMaterialAndSearch")} />}
      />
    </AppSafeAreaView>
  )
}
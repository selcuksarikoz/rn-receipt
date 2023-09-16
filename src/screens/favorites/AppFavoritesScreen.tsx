import { useEffect, useState } from "react";
import { Text, View } from "native-base";
import { AppFood, AppSafeAreaView } from "@components";
import { LocalCache } from "@utils/local-cache";


export function AppFavoritesScreen() {

  const [foods, setFoods] = useState<IFoodItem[]>([]);

  useEffect(() => {
    getFavoriteds();
  }, []);

  async function getFavoriteds() {
    const r = await LocalCache.getAllData();
    setFoods(r as IFoodItem[]);
  }

  return (
    <AppSafeAreaView>
      <View>
        {!foods.length ? (
          <Text>Empty</Text>
        ) : (
          foods.map(it => (
            <AppFood key={it.id} detail={it} />
          ))
        )}
      </View>
    </AppSafeAreaView>
  );
}

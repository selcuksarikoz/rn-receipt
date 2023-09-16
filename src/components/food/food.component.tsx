import { memo, useEffect, useState } from "react";
import FastImage from "react-native-fast-image";
import Icon from "react-native-ionicons";
import { Box, Button, IconButton, Stack, Text, View } from "native-base";

import { LocalCache } from "@utils/local-cache";
import { AppFoodModule } from "./food.interfaces";

import { styles } from "./food.style"

function AppFoodImpl(props: AppFoodModule.IAppFoodProps) {

  const { detail, onPress } = props

  const [favorited, setFavorited] = useState(false)

  useEffect(() => {
    checkFavorited()
  }, [])

  async function checkFavorited(){
    const c = await LocalCache.getData(detail.id.toString())
    setFavorited(!!c)
  }

  async function _setFavorited(){
    const has = await LocalCache.getData(detail.id.toString())
    if(!has) {
      setFavorited(true)
      await LocalCache.setData(detail.id.toString(), props.detail)
      return
    }

    await LocalCache.removeItem(detail.id.toString())
    setFavorited(false)
  }

  return (
    <Box style={styles.container}>
      <FastImage
        source={{
          uri: 'https://unsplash.it/400/400?image=1',
          headers: { Authorization: 'someAuthToken' },
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
        style={styles.image}
      />

      <Stack flex={1} p={2}>
          <View alignContent={"center"} flexDirection={"row"} justifyContent={"space-between"}>
            <Text numberOfLines={2} maxWidth={"80%"} pt={1} onPress={() => onPress(props.detail)}>
              {detail.title}
            </Text>
            <Button
              onPress={_setFavorited}
              variant={"ghost"}
            >
              <Icon size={18} name={favorited ? "star" : "star-outline"} />
            </Button>
          </View>
      </Stack>
    </Box>
  )
}

export const AppFood = memo(AppFoodImpl, (prev, curr) => prev.detail.id === curr.detail.id)
import { memo, useEffect, useState } from "react";
import FastImage from "react-native-fast-image";
import Icon from "react-native-ionicons";
import { Box, Button, Flex, HStack, IconButton, Stack, Text, VStack, View } from "native-base";

import { LocalCache } from "@utils/local-cache";
import { AppFoodModule } from "./food.interfaces";

import { styles } from "./food.style"
import { Colors } from "@constants";

function AppFoodImpl(props: AppFoodModule.IAppFoodProps) {

  const { detail, onPress } = props

  const [favorited, setFavorited] = useState(false)

  useEffect(() => {
    checkFavorited()
  }, [])

  async function checkFavorited() {
    const c = await LocalCache.getData(detail.id.toString())
    setFavorited(!!c)
  }

  async function _setFavorited() {
    const has = await LocalCache.getData(detail.id.toString())
    if (!has) {
      setFavorited(true)
      await LocalCache.setData(detail.id.toString(), props.detail)
      return
    }

    await LocalCache.removeItem(detail.id.toString())
    setFavorited(false)
  }

  return (
    <Box style={styles.container} flex={0.5}>
      <FastImage
        source={{
          uri: 'https://unsplash.it/400/400?image=1',
          headers: { Authorization: 'someAuthToken' },
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
        style={styles.image}
      />

      <Button
        onPress={_setFavorited}
        variant={"solid"}
        backgroundColor={"warmGray.100"}
        style={styles.button}
        p={0}
        width={8}
        height={8}
      >
        <Icon size={18} color={favorited ? Colors.primary : undefined} name={favorited ? "star" : "star-outline"} />
      </Button>

      <Flex p={4}>
        <Button
          variant={"link"}
          onPress={() => onPress(props.detail)}
        >
          <Text textAlign={"center"} numberOfLines={2}>{detail.title}</Text>
        </Button>
      </Flex>
    </Box>
  )
}

export const AppFood = memo(AppFoodImpl, (prev, curr) => prev.detail.id === curr.detail.id)
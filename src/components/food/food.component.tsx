import { memo } from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import FastImage from "react-native-fast-image";

import { AppFoodModule } from "./food.interfaces";

import { styles } from "./food.style"

function AppFoodImpl(props: AppFoodModule.IAppFood) {
  return (
    <View style={styles.container}>
      <FastImage
        source={{
          uri: 'https://unsplash.it/400/400?image=1',
          headers: { Authorization: 'someAuthToken' },
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
        style={styles.image}
      />

      <View style={styles.wrapper}>
          <View style={styles.title}>
            <Text>
              Etli Yaprak Sarması
            </Text>
            <View>
              <TouchableOpacity>
                <FontAwesomeIcon icon={faStar} />
              </TouchableOpacity>
            </View>
          </View>
      </View>
    </View>
  )
}

export const AppFood = memo(AppFoodImpl)
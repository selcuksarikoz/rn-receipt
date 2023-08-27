import { memo, useCallback, useEffect, useRef, useState } from "react";
import { TextInput, View } from "react-native";
import { Button, Flex, Input, ScrollView, VStack } from "native-base";

import { Lang } from "@utils/langs"
import { AppTagsModule } from "./tags.interfaces";
import { Http } from "@utils";
import { URLS } from "@constants";

import { styles } from "./tags.style"

const MAX_ITEM = 10
const DEFAULT_MATERIALS = ["rice", "egg", "potatoe"]

export function AppTags(props: AppTagsModule.IAppTagsProps) {

  const { onChange } = props

  const [items, setItems] = useState<Set<string>>(new Set())
  const [newValue, setNewValue] = useState<string>()

  const inputRef = useRef<TextInput>()

  useEffect(() => {

  }, [])

  useEffect(() => {
    onChange?.(items)
  }, [items])

  const onCloseTagItem = useCallback((item: string) => {
    if(items.has(item)) {
      items.delete(item)
      setItems(new Set([...items]))
    }
  }, [items])

  const addItem = useCallback(() => {
    if (!newValue?.length) return
    if (items.has(newValue)) return


    items.add(newValue)
    setItems(new Set([...items]))
    setNewValue(undefined)

    setTimeout(() => {
      inputRef.current?.focus()
    }, 500);
  }, [newValue, items])

  const addNewItem = useCallback((item: string) => {
    if (items.has(item)) return

    items.add(item)
    setItems(new Set([...items]))
    setNewValue(undefined)
  }, [items])

  function RecommendationsView() {
    return (
      <ScrollView
        alwaysBounceHorizontal
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.scrollView}>
          {
            DEFAULT_MATERIALS.filter(it => !items.has(it)).map((it) => (
              <AppTags.TagItem
                key={it}
                value={it}
                onPress={addNewItem}
                size={"sm"}
              />
            ))
          }
        </View>
      </ScrollView>
    )
  }

  const disableAddItem = items.size <= MAX_ITEM

  return (
    <VStack space={3} width={"100%"}>

      {disableAddItem ? (
        <RecommendationsView />
      ) : null}

      <Flex style={styles.wrapper} width={"100%"} p={3}>
        {
          [...items].map((it, index) => (
            <AppTags.TagItem
              key={it}
              onPress={onCloseTagItem}
              value={it}
            />
          ))
        }

        {
          disableAddItem ? (
            <Input
              p={1.5}
              ref={inputRef}
              width={120}
              value={newValue || ""}
              onChangeText={setNewValue}
              onSubmitEditing={addItem}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder={Lang.t("FoodAddPlaceholder")}
              autoFocus
              returnKeyType="go"
              maxLength={14}
            />
          ) : null
        }
      </Flex>
    </VStack>
  )
}

export module AppTags {
  export const TagItem = memo((props: AppTagsModule.ITagItemProps) => {
    const { value, onPress, size = "md" } = props
    return (
      <Button onPress={() => onPress?.(value)} size={size} py={1}>
        {value}
      </Button>
    )
  })
}

function getRecommendations(): Promise<IPopularSearch[]>{
  return Http().Get(URLS.popular_search)
}
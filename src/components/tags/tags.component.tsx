import { memo, useCallback, useEffect, useRef, useState } from "react";
import { TextInput, View, TouchableOpacity, Button, Text, ScrollView } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import { Lang } from "@utils/langs"

import { AppTagsModule } from "./tags.interfaces";

import { styles } from "./tags.style"

const MAX_ITEM = 10

export function AppTags(props: AppTagsModule.IAppTagsProps) {

  const { onChange } = props

  const [items, setItems] = useState<Set<string>>(new Set())
  const [newValue, setNewValue] = useState<string>()

  const inputRef = useRef<TextInput>()

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
            ["1", "2", "34", "2222"].filter(it => !items.has(it)).map((it) => (
              <AppTags.TagItem
                key={it}
                value={it}
                onClose={(e) => console.log(e)}
                onPress={addNewItem}
                showCloseBtn={false}
                isDisabled={items.has(it)}
              />
            ))
          }
        </View>
      </ScrollView>
    )
  }

  const disableAddItem = items.size <= MAX_ITEM

  return (
    <View style={styles.container}>

      {disableAddItem ? (
        <RecommendationsView />
      ) : null}

      <View style={styles.wrapper}>
        {
          [...items].map((it, index) => (
            <AppTags.TagItem
              key={it}
              onClose={onCloseTagItem}
              value={it}
            />
          ))
        }

        {
          disableAddItem ? (
            <TextInput
              ref={inputRef}
              style={styles.input}
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
      </View>
    </View>
  )
}

export module AppTags {
  export const TagItem = memo((props: AppTagsModule.ITagItemProps) => {
    const { onClose, value, showCloseBtn = true, onPress, isDisabled } = props
    return (
      <View style={styles.tagItem}>
        <TouchableOpacity
          disabled={isDisabled}
          onPress={() => onPress?.(value)}
          style={styles.button}
        >
          <Text>{value}</Text>
        </TouchableOpacity>

        {
          showCloseBtn ? (
            <TouchableOpacity onPress={() => onClose(value)} style={styles.closeButton}>
              <FontAwesomeIcon icon={faClose} />
            </TouchableOpacity>
          ) : null
        }
      </View>
    )
  })
}
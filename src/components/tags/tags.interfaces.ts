import { IButtonComponentType } from "native-base/lib/typescript/components/primitives/Button/types";

export module AppTagsModule {
  export interface IAppTagsProps {
    onChange: (items: Readonly<Set<string>>) => void;
    loading?: boolean
  }

  export interface ITagItemProps {
    onPress?: (value: string) => void;
    value: string
    size?: "md" | "sm" | "lg" | "xs"
  }
}

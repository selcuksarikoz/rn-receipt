export module AppTagsModule {
  export interface IAppTagsProps {
    onChange: (items: Readonly<Set<string>>) => void;
  }

  export interface ITagItemProps {
    onClose: (value: string) => void;
    onPress?: (value: string) => void;
    showCloseBtn?: boolean;
    value: string
    isDisabled?: boolean
  }
}

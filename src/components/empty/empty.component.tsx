import { Text, Container} from "native-base";

import { EmptyModule } from "./empty.interface";

export function AppEmpty(props: EmptyModule.IEmptyProps) {
  const { title } = props

  return (
    <Container alignSelf={"center"} justifyContent={"center"}>
      <Text alignSelf={"center"}>{title}</Text>
    </Container>
  )
}
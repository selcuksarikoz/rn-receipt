import { KeyboardAvoidingView, Platform } from "react-native";
import { useRef, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { Box, Button, Divider, FormControl, Input, VStack, WarningOutlineIcon } from "native-base";
import Icon from "react-native-ionicons";

import { AppSafeAreaView } from "@components";
import { Lang } from "@utils";
import { LoginModule } from "./login.interfaces";
import { Colors } from "@constants";

import { styles } from "./login.style"

export function AppLoginScreen(props: LoginModule.IAppLoginScreenProps) {

  const { navigation } = props;

  const usernameRef = useRef<TextInput>()
  const passwordRef = useRef<TextInput>()

  const [error, setError] = useState<boolean>(false)
  const [formData, setFormData] = useState<LoginModule.ILogin>({
    username: "asdasd@adasd.com",
    password: "asdsadsadsad"
  })

  const isDisabled = !formData.username || !formData.password

  function onSubmit() {
    const { username, password } = formData
    if(!username?.match(/\@|\./gm)) {
      setError(true)
      return
    }

    console.log(formData)
  }

  function nextStep() {
    setTimeout(() => {
      passwordRef.current?.focus()
    }, 1000)
  }

  return (
    <AppSafeAreaView>
      <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <VStack
          alignItems={"center"}
          justifyContent={"center"}
          space={4}
          padding={4}
          flexGrow={1}
        >
          {/* <FastImage
            source={require("../../assets/images/logo.jpg")}
            resizeMode={FastImage.resizeMode.cover}
            style={{width: 100, height: 100, borderRadius: 50}}
          /> */}
          <Box alignItems="center" width={"100%"}>
            <FormControl isInvalid={error}>
              <FormControl.Label>{Lang.t("Username")}</FormControl.Label>
              <Input
                value={formData.username}
                variant={"rounded"}
                size={"lg"}
                ref={usernameRef}
                onChangeText={(username) => setFormData(prev => ({ ...prev, username }))}
                placeholder={Lang.t("UsernamePlaceholder")}
                onSubmitEditing={nextStep}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Try different from previous passwords.
              </FormControl.ErrorMessage>
            </FormControl>
          </Box>

          <Box alignItems="center" width={"100%"}>
            <FormControl isInvalid={error}>
              <FormControl.Label>{Lang.t("Password")}</FormControl.Label>
              <Input
                value={formData.password}
                variant={"rounded"}
                size={"lg"}
                ref={passwordRef}
                onChangeText={(password) => setFormData(prev => ({ ...prev, password }))}
                placeholder={Lang.t("Password")}
                textContentType="password"
                returnKeyType="go"
                onSubmitEditing={onSubmit}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Try different from previous passwords.
              </FormControl.ErrorMessage>
            </FormControl>
          </Box>

          <VStack space={1} mt={4} width={"100%"}>
            <Button
              backgroundColor={isDisabled ? "gray.400" : undefined}
              disabled={isDisabled}
              onPress={onSubmit}
              rightIcon={<Icon name="star" />}
            >
              {Lang.t("Login")}
            </Button>

            <Divider h={0.5} mt={2} mb={2}></Divider>

            <Button
              variant={"outline"}
              width={"100%"}
              onPress={() => navigation.navigate("Register")}
            >
              {Lang.t("Register")}
            </Button>

            <Button
              variant={"outline"}
              width={"100%"}
              onPress={() => navigation.navigate("Main")}
            >
              Main
            </Button>

          </VStack>

        </VStack>
      </KeyboardAvoidingView>
    </AppSafeAreaView>
  );
}
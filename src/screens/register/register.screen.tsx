import { KeyboardAvoidingView, Platform, Text, TextInput } from "react-native";
import { useRef, useState } from "react";
import { Button, Box, Divider, FormControl, Input, VStack, WarningOutlineIcon } from "native-base";
import Icon from "react-native-ionicons";

import { AppSafeAreaView } from "@components";
import { RegisterModule } from "./register.interface";
import { Lang } from "@utils";
import { Colors } from "@constants";

import { styles } from "./register.style"

export function AppRegisterScreen(props: RegisterModule.IAppRegisterScreen) {

  const { navigation } = props;

  const usernameRef = useRef<TextInput>()
  const emailRef = useRef<TextInput>()
  const passwordRef = useRef<TextInput>()

  const [formData, setFormData] = useState<RegisterModule.IRegister>({
    username: undefined,
    password: undefined,
    email: undefined
  })

  const isDisabled = !formData.username || !formData.password || !formData.email

  async function onSubmit() {
    await fetch("https://google.com")
  }

  return (
    <AppSafeAreaView>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>

        <VStack
          alignItems={"center"}
          justifyContent={"center"}
          space={4}
          padding={4}
          flexGrow={1}
        >

          <Box alignItems="center" width={"100%"}>
            <FormControl isInvalid={false}>
              <FormControl.Label>{Lang.t("Username")}</FormControl.Label>
              <Input
                variant={"rounded"}
                size={"lg"}
                ref={usernameRef}
                onChangeText={(username) => setFormData(prev => ({ ...prev, username }))}
                placeholder={Lang.t("Username")}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Try different from previous passwords.
              </FormControl.ErrorMessage>
            </FormControl>
          </Box>

          <Box alignItems="center" width={"100%"}>
            <FormControl isInvalid={false}>
              <FormControl.Label>{Lang.t("EmailAddress")}</FormControl.Label>
              <Input
                variant={"rounded"}
                size={"lg"}
                ref={emailRef}
                onChangeText={(email) => setFormData(prev => ({ ...prev, email }))}
                placeholder={Lang.t("EmailAddress")}
                textContentType="emailAddress"
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Try different from previous passwords.
              </FormControl.ErrorMessage>
            </FormControl>
          </Box>

          <Box alignItems="center" width={"100%"}>
            <FormControl isInvalid={false}>
              <FormControl.Label>{Lang.t("Password")}</FormControl.Label>
              <Input
                variant={"rounded"}
                size={"lg"}
                ref={passwordRef}
                onChangeText={(password) => setFormData(prev => ({ ...prev, password }))}
                placeholder={Lang.t("Password")}
                textContentType="newPassword"
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
              {Lang.t("Register")}
            </Button>

            <Divider h={0.5} mt={2} mb={2}></Divider>

            <Button
              variant={"outline"}
              width={"100%"}
              onPress={() => navigation.navigate("Login")}
            >
              {Lang.t("Login")}
            </Button>
          </VStack>

        </VStack>

      </KeyboardAvoidingView>
    </AppSafeAreaView>
  );
}
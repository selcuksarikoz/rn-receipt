import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import Icon from "react-native-ionicons";
import { I18nextProvider } from "react-i18next";
import { Colors } from "@constants";
import { Lang } from "@utils";

import { AppHomeScreen, AppFavoritesScreen, AppSettingsScreen, AppLoginScreen, AppRegisterScreen, AppDetailScreen } from "@screens";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreenTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={AppHomeScreen}
        options={{
          title: Lang.t("Home"),
          tabBarIcon: ({ color, focused }) => <Icon color={focused ? Colors.border : "#ddd"} size={20} name="home" />,
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={AppFavoritesScreen}
        options={{
          title: Lang.t("Favoriteds"),
          tabBarIcon: ({ color, focused }) => <Icon color={focused ? Colors.border : "#ddd"} size={20} name="star" />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={AppSettingsScreen}
        options={{
          title: Lang.t("Settings"),
          tabBarIcon: ({ color, focused }) => <Icon color={focused ? Colors.border : "#ddd"} size={20} name="cog" />,
        }}
      />
    </Tab.Navigator>
  );
}

export function AppProxyScreen() {
  return (
    <NativeBaseProvider>
      <I18nextProvider i18n={Lang}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerBackTitle: Lang.t("Back")
            }}
          >
            {/* <Stack.Screen name="Login" component={AppLoginScreen} options={{
            headerShown: false
          }}/>
          <Stack.Screen name="Register" component={AppRegisterScreen} /> */}
            <Stack.Screen
              name="Main"
              component={HomeScreenTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Detail" component={AppDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </I18nextProvider>
    </NativeBaseProvider>
  );
}

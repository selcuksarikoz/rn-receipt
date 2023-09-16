import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import Icon from "react-native-ionicons";

import { AppHomeScreen, AppFavoritesScreen, AppSettingsScreen, AppLoginScreen, AppRegisterScreen, AppDetailScreen } from "@screens";
import { Colors } from "@constants";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreenTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={AppHomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => <Icon color={focused ? Colors.border : "#ddd"} size={20} name="home" />,
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={AppFavoritesScreen}
        options={{
          tabBarIcon: ({ color, focused }) => <Icon color={focused ? Colors.border : "#ddd"} size={20} name="star" />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={AppSettingsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => <Icon color={focused ? Colors.border : "#ddd"} size={20} name="cog" />,
        }}
      />
    </Tab.Navigator>
  );
}

export function AppProxyScreen() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
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
    </NativeBaseProvider>
  );
}

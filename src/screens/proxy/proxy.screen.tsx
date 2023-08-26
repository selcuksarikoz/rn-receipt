import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { faHome, faStar, faGear } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { AppHomeScreen, AppFavoritesScreen, AppSettingsScreen, AppLoginScreen, AppRegisterScreen } from "@screens";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreenTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={AppHomeScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faHome} color={color} />,
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={AppFavoritesScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faStar} color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={AppSettingsScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faGear} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export function AppProxyScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={AppLoginScreen} />
        <Stack.Screen name="Register" component={AppRegisterScreen} />
        <Stack.Screen
          name="Main"
          component={HomeScreenTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

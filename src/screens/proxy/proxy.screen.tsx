import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { faHome, faStar, faGear } from "@fortawesome/pro-solid-svg-icons";

import { AppHomeScreen } from "../home";
import { AppFavoritesScreen } from "../favorites";
import { AppSettingsScreen } from "../settings";
import { AppLoginScreen } from "../login";
import { AppRegisterScreen } from "../register";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={AppHomeScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faHome} color={color} />,
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
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

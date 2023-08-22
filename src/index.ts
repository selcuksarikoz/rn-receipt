import "react-native-gesture-handler";
import { AppRegistry } from "react-native";

import { AppProxyScreen } from "./screens/proxy/proxy.screen";
import { name as appName } from "../app.json";

AppRegistry.registerComponent(appName, () => AppProxyScreen);

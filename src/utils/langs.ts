import I18n from "react-native-i18n";

import en from "../languages/en.json";
import tr from "../languages/tr.json";

I18n.fallbacks = true;
 
I18n.translations = {
  en,
  tr
};

export { I18n as Lang };
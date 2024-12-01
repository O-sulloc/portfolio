import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";

import * as en from './en';
import * as ko from './ko';

const resources: Resource = {
  "en-US": {
    ...en
   },
   "ko-KR": {
    ...ko
   }
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: "en-US", // default language
  fallbackLng: {
    "ko-KR": ["ko-KR"], // use ko-KR if en-US translation is not available
    default: ["en-US"]
  },
  debug: true,
  keySeparator: false,
  interpolation: {
    escapeValue: false
  },
  react: {
    useSuspense: false
  }
});

export default i18n;
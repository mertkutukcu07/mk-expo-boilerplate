import { getLocales } from "expo-localization";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { en, es } from "./resources";

export const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
};

export const languages = [
  { label: "English", value: "en" },
  { label: "Spanish", value: "es" },
];

const getUserLanguage = (): string => {
  const LOCALE = getLocales()[0];
  return LOCALE?.languageCode || "en";
};

i18next.use(initReactI18next).init({
  debug: false,
  lng: getUserLanguage(),
  compatibilityJSON: "v3",
  fallbackLng: "en",
  resources,
});

export default i18next;

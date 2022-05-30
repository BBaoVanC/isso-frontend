import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";


i18n
  .use(Backend)
  .use(initReactI18next)
  .use(detector)
  .init({
    //resources,
    //resources: {
    //  en: {
    //    translation: {
    //      "hello": "orld",
    //    },
    //  },
    //},
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "http://localhost:8000/locales/{{lng}}/{{ns}}.json",
    },
  });

export default i18n;

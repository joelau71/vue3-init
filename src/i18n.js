import en from "./assets/i18n/en.json";
import zh from "./assets/i18n/zh.json";
import { createI18n } from "vue3-i18n";

const messages = {
  en,
  zh,
};

const i18n = createI18n({
  locale: "en",
  messages: messages,
});

export default i18n;

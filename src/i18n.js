import en from "./assets/i18n/en.json";
import sc from "./assets/i18n/sc.json";
import tc from "./assets/i18n/tc.json";
import { createI18n } from "vue3-i18n";

const messages = {
  en,
  sc,
  tc
};

const i18n = createI18n({
  locale: "en",
  messages: messages,
});

export default i18n;

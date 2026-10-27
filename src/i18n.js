import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { cardsData } from "../data/cardsData";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          info: "Our projects",
          baseline: "Software & Script Development",
          discord: "Join our Discord",
          devby: "Developed by",
          online: "online",
          join: "Join",
          intro: "Open source software, scripts and Discord bots.",
          code: "Code",
          demo: "Demo",
          updated: "updated",
        },
      },
      fr: {
        translation: {
          info: "Nos projets",
          baseline: "Développement de softs & scripts",
          discord: "Rejoignez notre Discord",
          devby: "Développé par",
          online: "en ligne",
          join: "Rejoindre",
          intro: "Logiciels, scripts et bots Discord open source.",
          code: "Code",
          demo: "Démo",
          updated: "màj",
        },
      },

      es: {
        translation: {
          info: "Nuestros proyectos",
          baseline: "Desarrollo de software y scripts",
          discord: "Únete a nuestro Discord",
          devby: "Desarrollado por",
          online: "en línea",
          join: "Unirse",
          intro: "Software, scripts y bots de Discord de código abierto.",
          code: "Código",
          demo: "Demo",
          updated: "act.",
        },
      },
    },
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

function fillTranslations(cardsData) {
  // console.log("Populate translations object...");
  cardsData.forEach((card) => {
    card.translations.forEach((translation) => {
      const { lang, description } = translation;
      i18n.addResourceBundle(
        lang,
        "app.card",
        {
          [card.project]: {
            description,
          },
        },
        true,
        true,
      );
    });
  });
}

fillTranslations(cardsData);

i18n.on("languageChanged", (lang) => {
  document.documentElement.lang = lang;
});
// console.log("Translations injected👍");

export default i18n;

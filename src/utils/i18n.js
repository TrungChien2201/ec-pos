import i18n from 'i18next'
import detector from 'i18next-browser-languagedetector'
// import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

import translationEN from 'locales/en.json'
import translationJA from 'locales/ja.json'

const resources = {
  en: {
    translation: translationEN,
  },
  ja: {
    translation: translationJA,
  },
}
i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: ['en', 'ja'],
    lng: 'ja',
    fallbackLng: 'ja',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n

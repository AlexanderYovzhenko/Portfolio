import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import translationRu from './translationRu'
import translationEn from './translationEn'

const langUser = navigator.language.includes('ru') ? 'ru' : 'en'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    supportedLngs: ['en', 'ru'],
    fallbackLng: langUser,
    detection: {
      order: ['localStorage'],
    },
    resources: {
      en: {
        translation: translationEn,
      },
      ru: {
        translation: translationRu,
      },
    },
  })

export default i18n

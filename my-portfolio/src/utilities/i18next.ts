import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
// import HttpApi from 'i18next-http-backend'
import translationRu from './translationRu'
import translationEn from './translationEn'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  // .use(HttpApi)
  .init({
    supportedLngs: ['en', 'ru'],
    fallbackLng: 'en',
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
    // backend: {
    //   loadPath:
    //     'C:UsersGolden ManDesktopProjectsMyPortfoliomy-portfolio/public/assets/locales/{{lng}}/translation.json',
    //   // 'https://goldenmanbel.github.io/project-management-app/assets/locales/{{lng}}/translation.json',
    //   requestOptions: {
    //     cache: 'no-store',
    //   },
    // },
  })

export default i18n

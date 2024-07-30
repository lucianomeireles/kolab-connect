import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome_message: 'Welcome to KolabConnect',
        comments: 'comments',
        see_comments: 'See comments',
        login: 'Login',
        email: 'Email',
        register: 'Register'
      }
    }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// import i18n from "i18next";
// import { useTranslation, initReactI18next } from "react-i18next";
// import LanguageDetector from 'i18next-browser-languagedetector';
// // import HttpApi from 'i18next-http-backend';
// import 'bootstrap/dist/js/bootstrap.js'
// import 'bootstrap/dist/css/bootstrap.min.css'


import './index.css';
import App from './App';

// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .use(LanguageDetector)
//   .use(HttpApi)
//   .init({
//     supportedLngs: ['en','es','pt']
//     fallbackLng: "en",
//     detection:{
//       order: ['cookie','htmlTag','querystring','localStorage', 'path', 'subdomain'],
//       caches : ['cokie']
//     },
//     backend:{
//       loadPath: 'assets/locales/{{lng}}/translation.json',
//     },
//     react: {useSuspense: false}
//   });




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

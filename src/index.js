import React from 'react';
import ReactDOM from 'react-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import translationRU from './App/locales/ru/translation.json';
import translationUZ from './App/locales/uz/translation.json';

import App from './App/App';

// the translations
const resources = {
	uz: {
		translation: translationUZ,
	},
	ru: {
		translation: translationRU,
	},
};

i18n.use(initReactI18next)
	.use(LanguageDetector)
	.use(HttpApi)
	.init({
		resources,
		supportedLngs: ['uz', 'ru'],
		fallbackLng: 'uz',
		lng: 'uz',
		detection: {
			order: ['subdomain', 'path', 'cookie', 'htmlTag', 'localStorage'],
			caches: ['cookie'],
		},
		interpolation: {
			escapeValue: false, // not needed for react!!
		},
		//backend: { loadPath: './App/locales/{{lng}}/translation.json' },
		react: { useSuspense: false },
	});

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

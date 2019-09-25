import Vue from 'vue';
import VueI18n from 'vue-i18n';
import enLang from '@/lang/en.json';
import noLang from '@/lang/no.json';

Vue.use(VueI18n);

const messages = {
	en: enLang,
	no: noLang,
};

export const i18n = new VueI18n({
	locale: 'no', // set locale
	fallbackLocale: 'no',
	messages, // set locale messages
});

const loadedLanguages = ['no']; // our default language that is preloaded

function setI18nLanguage(lang) {
	i18n.locale = lang;
	document.querySelector('html').setAttribute('lang', lang);
	return lang;
}

export function loadLanguageAsync(lang) {
	if (lang && i18n.locale !== lang) {
		if (!loadedLanguages.includes(lang)) {
			return import(/* webpackChunkName: "lang-[request]" */ `@/lang/${lang}`).then((msgs) => {
				i18n.setLocaleMessage(lang, msgs.default);
				loadedLanguages.push(lang);
				return setI18nLanguage(lang);
			});
		}
		return Promise.resolve(setI18nLanguage(lang));
	}
	return Promise.resolve(lang);
}

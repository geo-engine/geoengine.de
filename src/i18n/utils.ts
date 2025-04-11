import {translations, defaultLang} from './translations';

// export function getLangFromUrl(url: URL) {
//     const [, lang] = url.pathname.split('/');
//     if (lang in translations) return lang as keyof typeof translations;
//     return defaultLang;
// }

export function currentLanguage(astro_current_locale: string | undefined): keyof typeof translations {
    if (!astro_current_locale || !(astro_current_locale in translations)) {
        return defaultLang;
    }
    return astro_current_locale as keyof typeof translations;
}

// export function useTranslations(lang: keyof typeof translations) {
export function useTranslations(astro_current_locale: string | undefined) {
    const lang = currentLanguage(astro_current_locale);
    return function t(key: keyof (typeof translations)[typeof defaultLang]) {
        return translations[lang][key] || translations[defaultLang][key];
    };
}

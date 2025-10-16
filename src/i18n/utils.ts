import {getRelativeLocaleUrl} from 'astro:i18n';
import {translations, defaultLang, pages} from './translations';

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

export function useLocalePages(astro_current_locale: string | undefined) {
    const lang = currentLanguage(astro_current_locale);
    return function p(key: keyof (typeof pages)[typeof defaultLang]) {
        return pages[lang][key] || pages[defaultLang][key];
    };
}

/**
 * Returns the URL of the page in the given locale.
 *
 * If the page cannot be looked up, it returns the URL of the root page in the given locale.
 */
export function pageInOtherLocale(lang: LocaleString, currentPath: string) {
    // normalize the path
    if (!currentPath.endsWith('/')) {
        currentPath += '/';
    }

    let key = undefined;
    for (const localePages of Object.values(pages)) {
        for (const [page, pagePath] of Object.entries(localePages)) {
            if (pagePath === currentPath) {
                key = page as keyof (typeof pages)[typeof defaultLang];
                break;
            }
        }
        if (key) break;
    }

    if (key) {
        return pages[lang][key];
    }

    console.warn(`Could not find page for path ${currentPath} in locale ${lang}. Trying to swap locale in path instead.`);
    let path = currentPath;
    if (path.startsWith('/en/')) {
        path = path.substring(4); // remove /en/
    }
    return getRelativeLocaleUrl(lang, path);
}

function localePagePrefix(lang: LocaleString): string {
    return lang === defaultLang ? '' : `/${lang}`;
}

export function slugToPostLink(lang: LocaleString, slug: string) {
    return `${localePagePrefix(lang)}/posts/${slug}`;
}

export function slugToDataLink(slugWithLang: string) {
    const [_lang, ...slug] = slugWithLang.split('/');
    return `${slug.join('/')}`;
}

export type LocaleString = keyof typeof translations; // 'de' | 'en'

export function asLocale(lang: string | undefined): LocaleString {
    if (!lang) {
        return defaultLang;
    }
    if (lang in translations) {
        return lang as LocaleString;
    }
    return defaultLang;
}

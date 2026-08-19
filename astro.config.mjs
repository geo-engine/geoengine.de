import {defineConfig} from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import pagefind from 'astro-pagefind';
import icon from 'astro-icon';
import cookieconsent from '@jop-software/astro-cookieconsent';
import equalPageNameValidator from './src/integrations/equal-page-name-validator';
import {generateFavicons} from './plugins/favicon';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.geoengine.de',
    output: 'static',

    vite: {
        plugins: [
            tailwindcss(),
            generateFavicons({
                name: 'Geo Engine',
                shortName: 'Geo Engine',
                description: 'Geo Engine',
                themeColor: '#d7e4a5',
                backgroundColor: '#d7e4a5',
            }),
        ],
        build: {
            chunkSizeWarningLimit: 1000, // Raises limit to 1000 kB (1 MB) – maplibre-gl is a big library and already exceeds the default limit of 500 kB
            rollupOptions: {
                output: {
                    manualChunks(id) {
                        if (['maplibre-gl', 'scrollama'].some((lib) => id.includes(lib))) return 'scroller-libs';
                    },
                },
            },
        },
    },

    integrations: [
        equalPageNameValidator('posts/', 'en/posts/'),
        equalPageNameValidator('data/', 'en/data/'),
        icon({
            iconDir: './src/images/icons',
        }),
        cookieconsent(
            // created with `https://playground.cookieconsent.orestbida.com/`
            {
                guiOptions: {
                    consentModal: {
                        layout: 'bar',
                        position: 'bottom',
                        equalWeightButtons: false,
                        flipButtons: false,
                    },
                    preferencesModal: {
                        layout: 'box',
                        position: 'center',
                        equalWeightButtons: false,
                        flipButtons: false,
                    },
                },
                categories: {
                    necessary: {
                        readOnly: true,
                    },
                    analytics: {},
                },
                language: {
                    default: 'en',
                    autoDetect: 'browser',
                    translations: {
                        de: {
                            consentModal: {
                                title: 'Verwendung von Cookies',
                                description:
                                    'Wir verwenden technisch notwendige Cookies auf unserer Webseite sowie externe Dienste. Standardmäßig sind alle externen Dienste deaktiviert. Sie können diese jedoch nach belieben aktivieren & deaktivieren. Für weitere Informationen lesen Sie unsere Datenschutzbestimmungen.',
                                acceptAllBtn: 'Alle akzeptieren',
                                acceptNecessaryBtn: 'Alle ablehnen',
                            },
                        },
                        en: {
                            consentModal: {
                                title: 'Use of cookies.',
                                description:
                                    'We use technically necessary cookies on our website and external services. By default, all services are disabled. You can turn or off each service if you need them or not. For more informations please read our privacy policy.',
                                acceptAllBtn: 'Accept all',
                                acceptNecessaryBtn: 'Reject all',
                            },
                        },
                    },
                },
            },
        ),
        pagefind(),
    ],

    i18n: {
        defaultLocale: 'de',
        locales: ['de', 'en'],
        prefixDefaultLocale: false,
        // fallback: {
        //     de: 'en',
        // },
        // routing: {
        //     fallbackType: 'rewrite',
        // },
    },
});

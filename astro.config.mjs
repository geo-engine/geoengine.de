import {defineConfig} from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.geoengine.de',

    vite: {
        plugins: [tailwindcss()],
    },

    integrations: [icon()],

    experimental: {
        svg: true,
    },

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

// 1. Import utilities from `astro:content`
import {defineCollection, z, reference} from 'astro:content';

// 2. Import loader(s)
import {glob, file} from 'astro/loaders';

// 3. Define your collection(s)
const publications = defineCollection({
    loader: file('./src/data/publications.json'),
    schema: () =>
        z.object({
            id: z.number(), // mandatory
            authors: z.string().nonempty(),
            title: z.string().nonempty(),
            url: z.string().url(),
            source: z.string().nonempty(),
        }),
});

const posts = defineCollection({
    // loader: glob({pattern: '{de,en}/*.md', base: './src/posts'}),
    schema: ({image}) =>
        z.object({
            title: z.string().nonempty(),
            date: z.date(),
            image: image(),
        }),
});

const references = defineCollection({
    // loader: glob({pattern: '{de,en}/*.md', base: './src/posts'}),
    schema: ({image}) =>
        z.object({
            title: z.string().nonempty(),
            image: image(),
        }),
});

const services = defineCollection({
    // loader: glob({pattern: '{de,en}/*.md', base: './src/services'}),
    schema: () =>
        z.object({
            title: z.string().nonempty().max(100),
            description: z.string().nonempty().max(250),
            icon: z.string().nonempty(),
            benefits: z.array(z.string().nonempty()).max(5),
            references: z.array(reference('references')).max(5),
        }),
});

const cookies = defineCollection({
    loader: file('./src/data/cookies.json'),
    schema: () =>
        z.object({
            id: z.string().nonempty(), // mandatory
            de: z.object({
                purpose: z.string().nonempty(),
                validity: z.string().nonempty(),
            }),
            en: z.object({
                purpose: z.string().nonempty(),
                validity: z.string().nonempty(),
            }),
        }),
});

const data = defineCollection({
    schema: ({image}) =>
        z.object({
            title: z.string().nonempty().max(100),
            exampleImage: image(),
            classes: z.optional(z.array(z.string().nonempty()).min(1)),
            dataSources: z.array(z.string().nonempty()).min(1),
            method: z.string().nonempty(),
            quality: z.string().nonempty(),
            qualityImage: z.optional(image()),
            properties: z.object({
                crs: z.string().nonempty(),
                time: z.string().nonempty(),
                spatialResolution: z.string().nonempty(),
                spatialValidity: z.string().nonempty(),
            }),
        }),
});

const scroller = defineCollection({
    // loader: glob({pattern: '*.json', base: './src/content/scroller'}),
    type: 'data',
    schema: ({image}) =>
        z.array(
            z.object({
                id: z.string().nonempty().max(100),
                title: z.string().nonempty().max(100),
                image: image(),
                description: z.object({
                    de: z.string().nonempty(),
                    en: z.string().nonempty(),
                }),
                location: z.object({
                    center: z.array(z.number().finite()).length(2),
                    zoom: z.number().finite().positive(),
                    pitch: z.number().int().positive(),
                    bearing: z.number().int(),
                }),
            }),
        ),
});
// 4. Export a single `collections` object to register your collection(s)
export const collections = {
    data,
    cookies,
    posts,
    publications,
    references,
    scroller,
    services,
};

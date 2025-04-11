// 1. Import utilities from `astro:content`
import {defineCollection, z} from 'astro:content';

// 2. Import loader(s)
import {glob, file} from 'astro/loaders';
import {matchPattern} from 'astro/assets/utils';

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

// 4. Export a single `collections` object to register your collection(s)
export const collections = {publications, posts};

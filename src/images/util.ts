import {getImage} from 'astro:assets';

export async function optimizedBackgroundImage(src: ImageMetadata): Promise<string> {
    const bg = await getImage({src});
    return `url('${bg.src}')`;
}

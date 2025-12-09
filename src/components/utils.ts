/**
 * Generates an excerpt from a Markdown-formatted string by removing Markdown headings and links,
 * then truncating the result to the specified length and appending an ellipsis.
 *
 * @param text - The Markdown-formatted input string.
 * @param length - The maximum length of the excerpt (in characters).
 * @returns A plain text excerpt of the specified length, with Markdown formatting removed and an ellipsis appended.
 */
export function mdExcerpt(text: string, length: number) {
    const mdHeadingsAndLinksRegex = /(?:__|[*#])|\[(.*?)\]\(.*?\)|\[(.*?)\]/gm;
    const trimmedText = text.replace(mdHeadingsAndLinksRegex, '$1').trim();

    if (trimmedText.length <= length) {
        return trimmedText; // No need to truncate if already short enough
    }

    return trimmedText.substring(0, length) + '…';
}

/**
 * @returns an array of picture widths used for responsive and optimized images in <Image /> and <Picture /> components.
 *
 * Note: This is a function because Astro requires sizes to be mutable.
 */
export const pictureWidths = (): number[] => [768, 1024, 1280, 1536] as const;

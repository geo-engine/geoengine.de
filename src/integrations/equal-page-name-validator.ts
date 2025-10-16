import type {AstroIntegration} from 'astro';

/**
 * Validates that for every page under pathA there is a corresponding page under pathB and vice versa.
 */
export default function equalPageNameValidator(pathA: string, pathB: string): AstroIntegration {
    if (!pathA || !pathB) {
        throw new Error('Both paths must be provided');
    }
    if (pathA === pathB) {
        throw new Error('The two paths must be different');
    }

    // Canonicalize paths to always end with a slash
    if (!pathA.endsWith('/')) {
        pathA += '/';
    }
    if (!pathB.endsWith('/')) {
        pathB += '/';
    }

    return {
        name: 'equal-page-name-validator',
        hooks: {
            'astro:build:done': ({logger, dir, pages}) => {
                logger.info(`Validating equal page names between ${pathA} and ${pathB}…`);

                const aPages = new Set<string>();
                const bPages = new Set<string>();

                for (const page of pages) {
                    if (page.pathname.startsWith(pathA)) {
                        aPages.add(page.pathname.substring(pathA.length));
                    } else if (page.pathname.startsWith(pathB)) {
                        bPages.add(page.pathname.substring(pathB.length));
                    }
                }

                if (aPages.size === 0) {
                    logger.warn(`No pages found for path A: ${pathA}`);
                }
                if (bPages.size === 0) {
                    logger.warn(`No pages found for path B: ${pathB}`);
                }

                const difference = aPages.difference(bPages);
                const reverseDifference = bPages.difference(aPages);
                const totalDifferences = difference.size + reverseDifference.size;
                if (totalDifferences > 0) {
                    logger.error(`Found ${totalDifferences} page(s) that do not have a counterpart:`);
                    for (const page of difference) {
                        logger.error(` - ${pathA}${page}`);
                    }
                    for (const page of reverseDifference) {
                        logger.error(` - ${pathB}${page}`);
                    }
                    throw new Error(`Validation failed: ${totalDifferences} page(s) do not have a counterpart.`);
                }

                logger.info(`All ${aPages.size} page(s) in ${pathA} have a counterpart in ${pathB} and vice versa.`);
            },
        },
    };
}

const global = require('./_data/site');
const outdent = require('outdent');

module.exports = function (eleventyConfig) {
    // Copy
    eleventyConfig
        .addPassthroughCopy('static')
        .addPassthroughCopy('./*.{png,svg,ico}')
        .addPassthroughCopy('site.webmanifest')
        .addPassthroughCopy('CNAME');

    // Collections
    eleventyConfig.addCollection('work', function(collectionApi) {
        return collectionApi.getFilteredByGlob('work/*.md').reverse();
    });

    // Get the first `n` elements of a collection
    eleventyConfig.addFilter('head', (array, n) => {
        if (n < 0) {
            return array.slice(n);
        }
    
        return array.slice(0, n);
    });

    // Exclude items with permalink set to false
    eleventyConfig.addFilter('permalinkNotFalse', (items) => {
        return items.filter(item => {
            return (item.data.permalink !== false)
        })
    });

    // Image short-code https://www.11ty.dev/docs/languages/nunjucks/#optional%3A-use-your-nunjucks-environment
    // Usage: {% image "//placehold.it/300" "full" "My alt…" "My caption…" %}
    eleventyConfig.addShortcode('image', function(src, full, alt, caption) {
        return outdent`
            <figure ${full ? `class="full"` : ``}>
                <img src="${src}" ${alt ? `alt="${alt}"` : ``} loading="lazy">
                ${caption ? `<figcaption>${caption}</figcaption>` : ``}
            </figure>
        `;
    });

    // Video short-code

    // Stats short-code
}
const global = require('./_data/site');

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

    // Exclude items with permalink set to false
    function permalinkNotFalse(items) {
        return items.filter(item => {
            return (item.data.permalink !== false)
        })
    }
    eleventyConfig.addFilter('permalinkNotFalse', permalinkNotFalse);
}
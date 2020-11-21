const global = require('./_data/site');

module.exports = function (eleventyConfig) {
    // Passthrough File Copy
    eleventyConfig.addPassthroughCopy('static');
    eleventyConfig.addPassthroughCopy('./*.{png,svg,ico}');
    eleventyConfig.addPassthroughCopy('site.webmanifest');
    eleventyConfig.addPassthroughCopy('CNAME');

    // Collections
    eleventyConfig.addCollection('work', function(collectionApi) {
        return collectionApi.getFilteredByGlob('work/*.md').reverse();
    });
}
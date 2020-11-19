const global = require('./_data/site');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('static');
    eleventyConfig.addPassthroughCopy('./*.{png,svg,ico}');
    eleventyConfig.addPassthroughCopy('site.webmanifest');
    eleventyConfig.addPassthroughCopy('CNAME');
}
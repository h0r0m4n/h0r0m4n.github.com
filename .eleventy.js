const global = require('./_data/global');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('static');
}
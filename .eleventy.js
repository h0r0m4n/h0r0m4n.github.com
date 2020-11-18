const { folder } = require('./src/_data/config');
const config = require('./src/_data/config');
const global = require('./src/_data/global');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy(folder.assets);

    return {
        dir: {
            input: folder.input,
            output: folder.output
        }
    };
}
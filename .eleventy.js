const global = require('./_data/site'),
      outdent = require('outdent'),
      path = require('path'),
      Image = require('@11ty/eleventy-img'),
      { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
    // Copy
    eleventyConfig
        .addPassthroughCopy('static')
        .addPassthroughCopy('./*.{png,svg,ico}')
        .addPassthroughCopy('site.webmanifest')
        .addPassthroughCopy('CNAME');

    // Watch
    eleventyConfig.addWatchTarget('./sass/');

    // Collections
    eleventyConfig.addCollection('work', function(collectionApi) {
        return collectionApi.getFilteredByGlob('work/**/*.md').reverse();
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

    eleventyConfig.addFilter('year', dateObj => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc'} ).get('year');
    });

    // Stats short-code
    // Usage: {% stats "Label 1" "Value 1" "Label 2" "Value 2" "Label 3" "Value 3" "Label 4" "Value 4" %}
    eleventyConfig.addShortcode('stats', function(label1, value1, label2, value2, label3, value3, label4, value4) {
        return outdent`
            <ul class="t-list-horizontal stats">
                ${label1 ? `<li class="t-list-horizontal--item t-list-horizontal--item--distance-2"><p><strong>${label1}</strong><span>${value1}</span></p></li>` : ``}
                ${label2 ? `<li class="t-list-horizontal--item t-list-horizontal--item--distance-2"><p><strong>${label2}</strong><span>${value2}</span></p></li>` : ``}
                ${label3 ? `<li class="t-list-horizontal--item t-list-horizontal--item--distance-2"><p><strong>${label3}</strong><span>${value3}</span></p></li>` : ``}
                ${label4 ? `<li class="t-list-horizontal--item t-list-horizontal--item--distance-2"><p><strong>${label4}</strong><span>${value4}</span></p></li>` : ``}
            </ul>
        `;
    });

    // Year short-code
    eleventyConfig.addShortcode('year', function() {
        return `${new Date().getFullYear()}`;
    });

    // Experience short-code
    eleventyConfig.addShortcode('experience', function() {
        let currentYear = new Date().getFullYear(),
            startingYear = global.starting,
            experienceYear = currentYear - startingYear;

        return `${experienceYear}`;
    });

    // Post video
    // Usage: {% video "my-video" "full" "My caption…" %}
    eleventyConfig.addShortcode('video', function(src, full, autoplay, caption) {
        return outdent`
            <figure ${full ? `class="full"` : ``}>
                <video width="960" height="540" controls muted ${autoplay ? `autoplay` : ``} playsinline disablePictureInPicture>
                    <source src="/static/${src}.mp4" type="video/mp4">
                </video>
                ${caption ? `<figcaption class="t-container">${caption}</figcaption>` : ``}
            </figure>
        `;
    });

    // Post image
    // Usage: {% image "static/file-name.jpg" "full" "My alt…" "My caption…" %}
    eleventyConfig.addShortcode('image', async (src, full, alt, caption) => {

        let stats = await Image(src, {
            widths: [960, 1280, 1920, 2560],
            formats: ["jpeg", "webp", "avif"],
            filenameFormat: function (id, src, width, format, options) {
                const extension = path.extname(src);
                const name = path.basename(src, extension);

                return `${name}-${width}w.${format}`;
            },
            urlPath: "/static/",
            outputDir: "./_site/static/",
        });
    
        let lowestSrc = stats["jpeg"][0];
    
        const srcset = Object.keys(stats).reduce(
            (acc, format) => ({
                ...acc,
                [format]: stats[format].reduce(
                    (_acc, curr) => `${_acc} ${curr.srcset} ,`,
                    ""
                ),
            }),
            {}
        );
    
        const sourceAVIF = `<source type="image/avif" srcset="${srcset["avif"]}" >`;
        const sourceWEBP = `<source type="image/webp" srcset="${srcset["webp"]}" >`;
    
        const img = `<img
            loading="lazy"
            decoding="async"
            alt="${alt}"
            src="${lowestSrc.url}"
            sizes='(min-width: 1280px) 1280px, 100vw'
            srcset="${srcset["jpeg"]}"
            width="${lowestSrc.width}"
            height="${lowestSrc.height}">`;

        return outdent`
            <figure ${full ? `class="full"` : ``}>
                <picture>
                    ${sourceAVIF}
                    ${sourceWEBP}
                    ${img}
                </picture>
                ${caption ? `<figcaption class="t-container">${caption}</figcaption>` : ``}
            </figure>
        `;
    });

    // Image thumbnail
    // Usage: {% thumbnail "static/file-name.jpg" "My alt…" %}
    eleventyConfig.addNunjucksAsyncShortcode('thumbnail', async (src, alt) => {

        let stats = await Image(src, {
            widths: [500, 750, 1000],
            formats: ["jpeg", "webp", "avif"],
            filenameFormat: function (id, src, width, format, options) {
                const extension = path.extname(src);
                const name = path.basename(src, extension);

                return `${name}-${width}w.${format}`;
            },
            urlPath: "/static/",
            outputDir: "./_site/static/",
        });
    
        let lowestSrc = stats["jpeg"][0];
    
        const srcset = Object.keys(stats).reduce(
            (acc, format) => ({
                ...acc,
                [format]: stats[format].reduce(
                    (_acc, curr) => `${_acc} ${curr.srcset} ,`,
                    ""
                ),
            }),
            {}
        );

        const sourceAVIF = `<source type="image/avif" srcset="${srcset["avif"]}" >`;
        const sourceWEBP = `<source type="image/webp" srcset="${srcset["webp"]}" >`;
    
        const img = `<img
            loading="lazy"
            decoding="async"
            alt="${alt}"
            src="${lowestSrc.url}"
            sizes='(min-width: 1280px) 1280px, 100vw'
            srcset="${srcset["jpeg"]}"
            width="${lowestSrc.width}"
            height="${lowestSrc.height}">`;

        return outdent`
            <div class="image-container">
                <picture>
                    ${sourceAVIF}
                    ${sourceWEBP}
                    ${img}
                </picture>
            </div>
        `;
    });
}
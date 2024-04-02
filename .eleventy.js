const global = require('./src/_data/site'),
      outdent = require('outdent'),
      path = require('path'),
      Image = require('@11ty/eleventy-img'),
      { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
    // Copy
    eleventyConfig
        .addPassthroughCopy({"src/static/fonts": "/static/fonts"})
        .addPassthroughCopy({"src/static/assets": "/static/assets"})
        .addPassthroughCopy({"src/static/work/*.mp4": "/static/work"})
        .addPassthroughCopy({"src/static/testimonials": "/static/testimonials"})
        .addPassthroughCopy({"src/static/books": "/static/books"})
        .addPassthroughCopy("src/*.{png,svg,ico}")
        .addPassthroughCopy("src/site.webmanifest")
        .addPassthroughCopy("src/robots.txt")
        .addPassthroughCopy("src/CNAME");

    // Watch
    eleventyConfig.addWatchTarget('./src/sass/');

    // Collections
    eleventyConfig.addCollection('work', function(collectionApi) {
        return collectionApi.getFilteredByGlob('src/work/**/*.md').reverse();
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
            <div class="stats">
                ${label1 ? `<p><span class="title">${label1}</span><span class="value">${value1}</span></p>` : ``}
                ${label2 ? `<p><span class="title">${label2}</span><span class="value">${value2}</span></p>` : ``}
                ${label3 ? `<p><span class="title">${label3}</span><span class="value">${value3}</span></p>` : ``}
                ${label4 ? `<p><span class="title">${label4}</span><span class="value">${value4}</span></p>` : ``}
            </div>
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
                    <source src="/static/work/${src}.mp4" type="video/mp4">
                </video>
                ${caption ? `<figcaption class="t__container">${caption}</figcaption>` : ``}
            </figure>
        `;
    });

    // Work image
    // Usage: {% image "src/static/work/file-name.jpg" "full" "My alt…" "My caption…" %}
    eleventyConfig.addShortcode('image', async (src, full, alt, caption) => {

        let stats = await Image(src, {
            widths: [960, 1280, 1920, 2560],
            formats: ["jpeg", "webp", "avif"],
            sharpOptions: { quality: 90 },
            filenameFormat: function (id, src, width, format, options) {
                const extension = path.extname(src);
                const name = path.basename(src, extension);

                return `${name}-${width}w.${format}`;
            },
            urlPath: "/static/work",
            outputDir: "./dist/static/work",
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
            sizes='(min-width: 40rem) 50rem, (min-width: 75rem) 50rem, (min-width: 92rem) 50rem'
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
                ${caption ? `<figcaption class="t__container">${caption}</figcaption>` : ``}
            </figure>
        `;
    });

    // Work thumbnail
    // Usage: {% thumbnail "static/work/file-name.jpg" "My alt…" %}
    eleventyConfig.addNunjucksAsyncShortcode('thumbnail', async (src, alt) => {

        let stats = await Image(src, {
            widths: [640, 960, 1280],
            formats: ["jpeg", "webp", "avif"],
            sharpOptions: { quality: 90 },
            filenameFormat: function (id, src, width, format, options) {
                const extension = path.extname(src);
                const name = path.basename(src, extension);

                return `${name}-${width}w.${format}`;
            },
            urlPath: "/static/work",
            outputDir: "./dist/static/work",
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
            sizes='(min-width: 40rem) 50rem, (min-width: 75rem) 50rem, (min-width: 92rem) 50rem'
            srcset="${srcset["jpeg"]}"
            width="${lowestSrc.width}"
            height="${lowestSrc.height}">`;

        return outdent`
            <picture class="t__card__image">
                ${sourceAVIF}
                ${sourceWEBP}
                ${img}
            </picture>
        `;
    });

    // Book cover
    // Usage: {% book "static/file-name.jpg" "My alt…" %}
    eleventyConfig.addNunjucksAsyncShortcode('book', async (src, alt) => {

        let stats = await Image(src, {
            widths: [160, 240, 320],
            formats: ["jpeg", "webp", "avif"],
            sharpOptions: { quality: 90 },
            filenameFormat: function (id, src, width, format, options) {
                const extension = path.extname(src);
                const name = path.basename(src, extension);

                return `${name}-${width}w.${format}`;
            },
            urlPath: "/static/work",
            outputDir: "./dist/static/work",
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
            sizes='(min-width: 40rem) 50rem, (min-width: 75rem) 50rem, (min-width: 92rem) 50rem'
            srcset="${srcset["jpeg"]}"
            width="${lowestSrc.width}"
            height="${lowestSrc.height}">`;

        return outdent`
            <picture>
                ${sourceAVIF}
                ${sourceWEBP}
                ${img}
            </picture>
        `;
    });

    // Testimonial avatar
    // Usage: {% testimonial "static/file-name.jpg" "My alt…" %}
    eleventyConfig.addNunjucksAsyncShortcode('testimonial', async (src, alt) => {

        let stats = await Image(src, {
            widths: [64, 96, 128],
            formats: ["jpeg", "webp", "avif"],
            sharpOptions: { quality: 90 },
            filenameFormat: function (id, src, width, format, options) {
                const extension = path.extname(src);
                const name = path.basename(src, extension);

                return `${name}-${width}w.${format}`;
            },
            urlPath: "/static/testimonials",
            outputDir: "./dist/static/testimonials",
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
            sizes='(min-width: 40rem) 50rem, (min-width: 75rem) 50rem, (min-width: 92rem) 50rem'
            srcset="${srcset["jpeg"]}"
            width="${lowestSrc.width}"
            height="${lowestSrc.height}">`;

        return outdent`
            <picture>
                ${sourceAVIF}
                ${sourceWEBP}
                ${img}
            </picture>
        `;
    });

    return {
        dir: {
            input: 'src',
            output: 'dist',
            includes: '_includes',
            data: '_data'
        }
    }
}

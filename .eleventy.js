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

    // Image short-code
    // Usage: {% image "my-image" "full" "My alt…" "My caption…" %}
    eleventyConfig.addShortcode('image', function(src, full, alt, caption) {
        return outdent`
            <figure ${full ? `class="full"` : ``}>
                <img src="/static/${src}.jpg" srcset="/static/${src}@1.5x.jpg 1.5x, /static/${src}@2x.jpg 2x" ${alt ? `alt="${alt}"` : ``} loading="lazy">
                ${caption ? `<figcaption>${caption}</figcaption>` : ``}
            </figure>
        `;
    });

    // Video short-code
    // Usage: {% video "my-video" "full" "My caption…" %}
    eleventyConfig.addShortcode('video', function(src, full, caption) {
        return outdent`
            <figure ${full ? `class="full"` : ``}>
                <video width="960" height="540" autoplay loop muted playsinline disablePictureInPicture>
                    <source src="/static/${src}.mp4" type="video/mp4">
                </video>
                ${caption ? `<figcaption>${caption}</figcaption>` : ``}
            </figure>
        `;
    });

    // Stats short-code
    // Usage: {% stats "Label 1" "Value 1" "Label 2" "Value 2" "Label 3" "Value 3" "Label 4" "Value 4" %}
    eleventyConfig.addShortcode('stats', function(label1, value1, label2, value2, label3, value3, label4, value4) {
        return outdent`
            <ul class="t-list-horizontal stats">
                ${label1 ? `<li class="t-list-horizontal--item t-list-horizontal--item--distance-2"><p><strong>${label1}</strong>${value1}</p></li>` : ``}
                ${label2 ? `<li class="t-list-horizontal--item t-list-horizontal--item--distance-2"><p><strong>${label2}</strong>${value2}</p></li>` : ``}
                ${label3 ? `<li class="t-list-horizontal--item t-list-horizontal--item--distance-2"><p><strong>${label3}</strong>${value3}</p></li>` : ``}
                ${label4 ? `<li class="t-list-horizontal--item t-list-horizontal--item--distance-2"><p><strong>${label4}</strong>${value4}</p></li>` : ``}
            </ul>
        `;
    });
}
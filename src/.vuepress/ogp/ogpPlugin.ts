import type { Plugin } from '@vuepress/core'

export interface OgpPluginOptions {
    options: null
}

const defaultOptions = {
    siteTitle: (_, $site) => $site.title,
    title: ($page) => $page.frontmatter.ogTitle || $page.frontmatter.title || $page.title,
    description: ($page) => $page.frontmatter.description,
    author: ($page) => $page.frontmatter.author,
    tags: ($page) => $page.frontmatter.tags,
    twitterCard: (_) => 'summary',
    type: ($page) => $page.frontmatter.ogType || "article",
    url: (_, $site, path) => ($site.domain || '') + path,
    image: ($page, $site) => {
        if ($page.frontmatter.image) {
            return $site.domain && !$page.frontmatter.image.startsWith('http')
                ? $site.domain + $page.frontmatter.image
                : $page.frontmatter.image;
        }
        if ($site.image) {
            return $site.domain && !$site.image.startsWith('http')
                ? $site.domain + $site.image
                : $site.image;
        }
        return '';
    },
    publishedAt: ($page) => $page.frontmatter.date && new Date($page.frontmatter.date).toISOString(),
    modifiedAt: ($page) => $page.lastUpdated && new Date($page.lastUpdated).toISOString(),
    customMeta: () => { console.log('aaaaaa') },


    defaultMeta(add, ctx) {
        add("article:published_time", ctx.publishedAt);
        add("article:modified_time", ctx.modifiedAt);
        add("og:site_name", ctx.siteTitle);
        add("og:title", ctx.title);
        add("og:description", ctx.description);
        add("og:type", ctx.type);
        add("og:url", ctx.url);
        add("og:image", ctx.image);
        add("twitter:title", ctx.title);
        add("twitter:description", ctx.description);
        add("twitter:url", ctx.url);
        add("twitter:card", ctx.twitterCard);
        add("twitter:image", ctx.image);

        if (ctx.$site.domain) {
            add("twitter:domain", ctx.$site.domain.replace('http://', '').replace('https://', ''));
        }
    },
};

function getAddMeta(head) {
    return (name, content, attribute = null) => {
        const exists = head.findIndex((item) => [item[1].hid, item[1].name, item[1].property].includes(name)) != -1;
        if (exists) return;

        if (!content) return;
        if (!attribute) {
            attribute = ["article:", "og:"].some((type) => name.startsWith(type))
                ? "property" : "name";
        }

        head.push([
            "meta",
            {
                hid: name,
                [attribute]: name,
                content: content,
            }
        ]);
    };
}

export const ogpPlugin = ({
    options = {},
    ...otherOptions
}: OgpPluginOptions = {}): Plugin => {
    return (app) => {
        options = Object.assign(defaultOptions, options);

        return {
            name: 'vuepress-plugin-ogp',
            multiple: false,

            extendsPage: ($page) => {
                let $site = { ...app.siteData, ...app.options, ...otherOptions };
                let head = $page.frontmatter.head || [];
                let addMeta = getAddMeta(head);
                let optionArgs = [$page, $site, $page.path];

                const meta = {
                    $page,
                    $site,
                    siteTitle: options.siteTitle(...optionArgs),
                    title: options.title(...optionArgs),
                    description: options.description(...optionArgs),
                    author: options.author(...optionArgs),
                    tags: options.tags(...optionArgs),
                    twitterCard: options.twitterCard(...optionArgs),
                    type: options.type(...optionArgs),
                    url: options.url(...optionArgs),
                    image: options.image(...optionArgs),
                    publishedAt: options.publishedAt(...optionArgs),
                    modifiedAt: options.modifiedAt(...optionArgs),
                }

                options.defaultMeta(addMeta, meta);
                options.customMeta(addMeta, meta);

                $page.frontmatter.head = head;
            }
        }
    }
}

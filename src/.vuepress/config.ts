import { defineUserConfig, viteBundler } from 'vuepress';
import { path } from '@vuepress/utils'
import { containerPlugin } from '@vuepress/plugin-container'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { ogpPlugin } from './ogp'
import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { makeBlog } from './make-blog';
import localTheme from './plumstheme/src/node'

export default defineUserConfig({
    base: '/',
    lang: 'ja-JP',
    title: 'PHOHP',
    description: 'plumshand home page',

    head: [
        [ 'link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Kosugi+Maru' } ],
        //[ 'script', { defer: true, src: '/fonts/js/fontawesome.min.js' } ],
        //[ 'script', { defer: true, src: '/fonts/js/solid.min.js' } ],
        //[ 'script', { defer: true, src: '/fonts/js/brands.min.js' } ],
    ],

    theme: localTheme({
        logo: '/plumshand.png',
        sidebar: false,
        locales: {
            '/': {
                lastUpdatedText: '更新日時',
                navbar: [
                    { icon: faTwitter, link: 'https://twitter.com/plumshand', noExternalIcon: true },
                    { icon: faYoutube, link: 'https://www.youtube.com/@plumshand', noExternalIcon: true },
                ]
            },
        },
        themePlugins: {
            activeHeaderLinks: false,
        },
    }),

    locales: {
        '/': { lang: 'ja-JP' }
    },

    plugins: [
        registerComponentsPlugin({ componentsDir: path.resolve(__dirname, './components/') }),
        containerPlugin({
            type: 'tip',
            before: (info: string): string => `<div class="custom-container tip">${info ? `<p class="custom-container-title">${info}</p>` : ''}\n`,
            after: (): string => '</div>\n',
        }),
        containerPlugin({
            type: 'warning',
            before: (info: string): string => `<div class="custom-container warning">${info ? `<p class="custom-container-title">${info}</p>` : ''}\n`,
            after: (): string => '</div>\n',
        }),
        containerPlugin({
            type: 'danger',
            before: (info: string): string => `<div class="custom-container danger">${info ? `<p class="custom-container-title">${info}</p>` : ''}\n`,
            after: (): string => '</div>\n',
        }),
        ogpPlugin({
            options: {
                customMeta: (add, ctx) => {
                    add('twitter:site', '@plumshand')
                },
            },
            domain: 'https://plumshand.github.io',
            image: '/favicon.png',
        }),
    ],

    clientConfigFile: path.resolve(__dirname, './client.ts'),

    async onInitialized(app) {
        await makeBlog(app);
    },

    bundler: viteBundler({
        vuePluginOptions: {
            template: {
                compilerOptions: {
                }
            }
        }
    }),

    shouldPrefetch: false,
})

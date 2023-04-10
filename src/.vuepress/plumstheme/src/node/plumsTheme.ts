import type { Page, Theme } from '@vuepress/core'
import { containerPlugin } from '@vuepress/plugin-container'
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import { palettePlugin } from '@vuepress/plugin-palette'
import { gitPlugin } from '@vuepress/plugin-git'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { themeDataPlugin } from '@vuepress/plugin-theme-data'
import { path, fs } from '@vuepress/utils'
import {
    DefaultThemeLocaleOptions,
    DefaultThemePageData,
    DefaultThemePluginsOptions,
} from '../shared'
import { assignDefaultLocaleOptions, resolveContainerPluginOptions } from './utils'

export interface DefaultThemeOptions extends DefaultThemeLocaleOptions {
    themePlugins?: DefaultThemePluginsOptions
}

export const plumsTheme = ({
    themePlugins = {},
    ...localeOptions
}: DefaultThemeOptions = {}): Theme => {
    assignDefaultLocaleOptions(localeOptions)

    return {
        name: 'PlumsTheme',
        templateBuild: path.resolve(__dirname, '../../templates/build.html'),
        templateDev: path.resolve(__dirname, '../../templates/build.html'),

        alias: Object.fromEntries(
            fs.readdirSync(path.resolve(__dirname, '../client/components'))
                .filter((file) => file.endsWith('.vue'))
                .map((file) => [
                    `@theme/${file}`,
                    path.resolve(__dirname, '../client/components', file),
                ])
        ),

        clientConfigFile: path.resolve(__dirname, '../client/config.ts'),

        extendsPage: (page: Page<Partial<DefaultThemePageData>>) => {
            page.data.filePathRelative = page.filePathRelative
            page.routeMeta.title = page.title
        },

        plugins: [
            themePlugins.activeHeaderLinks !== false
                ? activeHeaderLinksPlugin({
                    headerLinkSelector: 'a.sidebar-item',
                    headerAnchorSelector: '.header-anchor',
                    delay: 300,
                })
                : [],

            themePlugins.nprogress !== false ? nprogressPlugin() : [],

            themePlugins.mediumZoom !== false
                ? mediumZoomPlugin({
                    selector: '.theme-default-content > img, .theme-default-content :not(a) > img',
                    zoomOptions: {},
                    delay: 300,
                })
                : [],

            themePlugins.container?.tip !== false
                ? containerPlugin(resolveContainerPluginOptions(localeOptions, 'tip'))
                : [],

            themePlugins.container?.warning !== false
                ? containerPlugin(resolveContainerPluginOptions(localeOptions, 'warning'))
                : [],

            themePlugins.container?.danger !== false
                ? containerPlugin(resolveContainerPluginOptions(localeOptions, 'danger'))
                : [],

            themePlugins.externalLinkIcon !== false
                ? externalLinkIconPlugin({
                    locales: Object.entries(localeOptions.locales || {}).reduce((result, [key, value]) => {
                        result[key] = { openInNewWindow: value.openInNewWindow ?? localeOptions.openInNewWindow };
                        return result;
                    }, {})
                })
                : [],

            palettePlugin({ preset: 'sass' }),

            themePlugins.git !== false
                ? gitPlugin({
                    createdTime: false,
                    updatedTime: localeOptions.lastUpdated !== false,
                    contributors: localeOptions.contributors !== false,
                })
                : [],

            themeDataPlugin({ themeData: localeOptions }),
        ],
    }
}

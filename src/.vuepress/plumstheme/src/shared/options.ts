import type { ThemeData } from '@vuepress/plugin-theme-data'
import type { LocaleData } from '@vuepress/shared'
import type { NavbarConfig, SidebarConfig } from './nav'

export interface DefaultThemePluginsOptions {
    activeHeaderLinks?: boolean
    container?: {
        tip?: boolean
        warning?: boolean
        danger?: boolean
        details?: boolean
        codeGroup?: boolean
        codeGroupItem?: boolean
    }
    externalLinkIcon?: boolean
    git?: boolean
    mediumZoom?: boolean
    nprogress?: boolean
    prismjs?: boolean
}

export type DefaultThemeLocaleOptions = DefaultThemeData
export type DefaultThemeData = ThemeData<DefaultThemeLocaleData>

export interface DefaultThemeLocaleData extends LocaleData {
    colorMode?: 'auto' | 'dark' | 'light'
    colorModeSwitch?: boolean
    home?: string
    navbar?: false | NavbarConfig
    logo?: null | string
    selectLanguageName?: string
    sidebar?: 'auto' | false | SidebarConfig
    sidebarDepth?: number
    lastUpdated?: boolean
    lastUpdatedText?: string
    contributors?: boolean
    tip?: string
    warning?: string
    danger?: string
    notFound?: string[]
    backToHome?: string
    openInNewWindow?: string
    toggleColorMode?: string
    toggleSidebar?: string
}

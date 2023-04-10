import type { GitPluginPageData } from '@vuepress/plugin-git'
import type { NavLink, SidebarConfig } from './nav'

export interface DefaultThemePageData extends GitPluginPageData {
    filePathRelative: string | null
}

export interface PlumsThemePageFrontmatter {
    navbar?: boolean
    pageClass?: string
}

export interface PlumsThemeNormalPageFrontmatter extends PlumsThemePageFrontmatter {
    excludes?: boolean
    filePath?: string
    home?: string
    lastUpdated?: boolean
    sidebar?: 'auto' | false | SidebarConfig
    sidebarDepth?: number
    prev?: string | NavLink
    next?: string | NavLink
}

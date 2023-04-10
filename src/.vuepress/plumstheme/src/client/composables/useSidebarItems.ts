import { usePageData, usePageFrontmatter } from '@vuepress/client'
import type { PageHeader } from '@vuepress/client'
import { isArray, isPlainObject, isString, resolveLocalePath } from '@vuepress/shared'
import { computed, inject, provide } from 'vue'
import type { ComputedRef, InjectionKey } from 'vue'
import { useRoute } from 'vue-router'
import type {
    DefaultThemeData,
    PlumsThemeNormalPageFrontmatter,
    ResolvedSidebarItem,
    SidebarConfigArray,
    SidebarConfigObject,
    SidebarItem,
} from '../../shared'
import { useNavLink, useThemeLocaleData, } from '.'

export type SidebarItemsRef = ComputedRef<ResolvedSidebarItem[]>

export const sidebarItemsSymbol: InjectionKey<SidebarItemsRef> = Symbol('sidebarItems')

export const useSidebarItems = (): SidebarItemsRef => {
    const sidebarItems = inject(sidebarItemsSymbol)
    if (!sidebarItems) {
        throw new Error('useSidebarItems() is called without provider.')
    }
    return sidebarItems
}

export const setupSidebarItems = (): void => {
    const themeLocale = useThemeLocaleData()
    const frontmatter = usePageFrontmatter()
    const sidebarItems = computed(() => resolveSidebarItems(frontmatter.value, themeLocale.value))
    provide(sidebarItemsSymbol, sidebarItems)
}

export const resolveSidebarItems = (
    frontmatter: PlumsThemeNormalPageFrontmatter,
    themeLocale: DefaultThemeData
): ResolvedSidebarItem[] => {
    const sidebarConfig = frontmatter.sidebar ?? themeLocale.sidebar ?? 'auto'
    const sidebarDepth = frontmatter.sidebarDepth ?? themeLocale.sidebarDepth ?? 2

    if (frontmatter.home || sidebarConfig === false) {
        return []
    }

    if (sidebarConfig === 'auto') {
        return resolveAutoSidebarItems(sidebarDepth)
    }

    if (isArray(sidebarConfig)) {
        return resolveArraySidebarItems(sidebarConfig, sidebarDepth)
    }

    if (isPlainObject(sidebarConfig)) {
        return resolveMultiSidebarItems(sidebarConfig, sidebarDepth)
    }

    return []
}

export const headerToSidebarItem = (
    header: PageHeader,
    sidebarDepth: number
): ResolvedSidebarItem => ({
    text: header.title,
    link: `#${header.slug}`,
    children: headersToSidebarItemChildren(header.children, sidebarDepth),
})

export const headersToSidebarItemChildren = (
    headers: PageHeader[],
    sidebarDepth: number
): ResolvedSidebarItem[] => {
    return sidebarDepth > 0
        ? headers.map((header) => headerToSidebarItem(header, sidebarDepth - 1))
        : []
}

export const resolveAutoSidebarItems =(
    sidebarDepth: number
): ResolvedSidebarItem[] => {
    const page = usePageData();

    return [{
        text: page.value.title,
        children: headersToSidebarItemChildren(page.value.headers, sidebarDepth),
    }]
}

export const resolveArraySidebarItems =(
    sidebarConfig: SidebarConfigArray,
    sidebarDepath: number
): ResolvedSidebarItem[] => {
    const route = useRoute()
    const page = usePageData();

    const handleChildItem = (
        item: ResolvedSidebarItem | SidebarItem | string
    ): ResolvedSidebarItem => {
        let childItem: ResolvedSidebarItem
        if (isString(item)) {
            childItem = useNavLink(item)
        } else {
            childItem = item as ResolvedSidebarItem
        }

        if (childItem.children) {
            return {
                ...childItem,
                children: childItem.children.map((item) => handleChildItem(item)),
            }
        }

        if (childItem.link === route.path) {
            const headers = page.value.headers[0]?.level === 1
                ? page.value.headers[0].children
                : page.value.headeres
            return {
                ...childItem,
                children: headersToSidebarItemChildren(headers, sidebarDepth),
            }
        }

        return childItem
    }

    return sidebarConfig.map((item) => handleChildItem(item))
}

export const resolveMultiSidebarItems =(
    sidebarConfig: SidebarConfigObject,
    sidebarDepath: number
): ResolvedSidebarItem[] => {
    const route = useRoute()
    const page = usePageData();
    const matchedSidebarConfig = sidebarConfig[sidebarDepth] ?? []

    return resolveArraySidebarItems(matchedSidebarConfig, sidebarDepth)
}

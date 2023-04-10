import type { IconDefinition } from '@fortawesome/free-regular-svg-icons'
import type { FunctionalComponent } from 'vue'

export interface NavItem {
    icon?: IconDefinition
    text?: string
    ariaLabel?: string
}

export interface NavGroup<T> extends NavItem {
    children: T[]
}

export interface NavLink extends NavItem {
    link: string
    rel?: string
    target?: string
    activeMatch?: string
    noExternalIcon?: boolean
}

export type NavbarItem = NavLink
export type NavbarGroup = NavGroup<NavbarGroup | NavbarItem | string>
export type NavbarConfig = (NavbarItem | NavbarGroup | string)[]

export type ResolvedNavbarItem = NavbarItem | NavGroup<ResolvedNavbarItem>

export type SidebarItem = NavItem & Partial<NavLink>
export type SidebarGroup = SidebarItem & NavGroup<SidebarItem | SidebarGroup | string> & {
    collapsible?: boolean
}

export type SidebarConfigArray = (SidebarItem | SidebarGroup | string)[]
export type SidebarConfigObject = Record<string, SidebarConfigArray>
export type SidebarConfig = SidebarConfigArray | SidebarConfigObject
export type ResolvedSidebarItem = SidebarItem & Partial<NavGroup<ResolvedNavbarItem>> & {
    collapsible?: boolean
}

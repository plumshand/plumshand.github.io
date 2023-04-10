<script setup lang="ts">
import AutoLink from '@theme/AutoLink.vue'
import NavbarDropdown from '@theme/NavbarDropdown.vue'
import { isString } from '@vuepress/shared'
import { computed, ref } from 'vue'
import type { ComputedRef } from 'vue'
import type {
    NavbarGroup,
    NavbarItem,
    ResolvedNavbarItem,
} from '../../shared'
import { useNavLink, useThemeLocaleData } from '../composables'

const resolveNavbarItem = (item: NavbarItem | NavbarGroup | string): ResolvedNavbarItem => {
    if (isString(item)) {
        return useNavLink(item)
    }
    if ((item as NavbarGroup).children) {
        return {
            ...item,
            children: (item as NavbarGroup).children.map(resolveNavbarItem),
        }
    }
    return item as ResolvedNavbarItem
}

const useNavbarConfig = (): ComputedRef<ResolvedNavbarItem[]> => {
    const themeLocale = useThemeLocaleData()
    return computed(() => (themeLocale.value.navbar || []).map(resolveNavbarItem))
}

const isMobile = ref(false)
const navbarConfig = useNavbarConfig()
const navbarLinks = computed(() => [
    ...navbarConfig.value,
]);
</script>

<template>
    <nav v-if="navbarLinks.length" class="navbar-items">
        <div v-for="item in navbarLinks" :key="item.text" class="navbar-item">
            <NavbarDropdown
                v-if="item.children"
                :item="item"
                :class="isMobile ? 'mobile' : ''"
            />
            <AutoLink v-else :item="item" />
        </div>
    </nav>
</template>

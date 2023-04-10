<script setup lang="ts">
import { ClientOnly, useRouteLocale, useSiteLocaleData, withBase } from '@vuepress/client'
import type { FunctionalComponent } from 'vue'
import { computed, h } from 'vue'
import { useThemeLocaleData } from '../composables'

const routeLocale = useRouteLocale()
const siteLocale = useSiteLocaleData()
const themeLocale = useThemeLocaleData()

const navbarBrandLink = computed(
    () => themeLocale.value.home || routeLocale.value
)
const navbarBrandTitle = computed(() => siteLocale.value.title)
const navbarBrandLogo = computed(() => {
    return themeLocale.value.logo
})

const NavbarBrandLogo: FunctionalComponent = () => {
    if (!navbarBrandLogo.value) return null
    const img = h('img', {
        class: 'logo',
        src: withBase(navbarBrandLogo.value),
        alt: navbarBrandTitle.value
    })
    if (themeLocale.value.logoDark === undefined) {
        return img;
    }
    return h(ClientOnly, () => img);
}
</script>

<template>
    <RouterLink :to="navbarBrandLink">
        <NavbarBrandLogo />
        <span v-if="navbarBrandTitle" class="site-name" :class="{ 'can-hide': navbarBrandLogo }">{{ navbarBrandTitle }}</span>
    </RouterLink>
</template>

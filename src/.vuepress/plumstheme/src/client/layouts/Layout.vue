<script setup lang="ts">
import { usePageData, usePageFrontmatter } from '@vuepress/client'
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import type { PlumsThemePageFrontmatter } from '../../shared'
import { useSidebarItems, useThemeLocaleData } from '../composables'
import Navbar from '@theme/Navbar.vue'
import Page from '@theme/Page.vue'
import Sidebar from '@theme/Sidebar.vue'

const page = usePageData()
const frontmatter = usePageFrontmatter<PlumsThemePageFrontmatter>()
const themeLocale = useThemeLocaleData()

const shouldShowNavbar = computed(
    () => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false
)

const sidebarItems = useSidebarItems()
const isSidebarOpen = ref(false)
const toggleSidebar = (to?: boolean): void => {
    isSidebarOpen.value = (typeof to === 'boolean') ? to : !isSidebarOpen.value
}
const touchStart = { x: 0, y: 0 }
const onTouchStart = (e): void => {
    touchStart.x = e.changedTouches[0].clientX
    touchStart.y = e.changedTouches[0].clientY
}
const onTouchEnd = (e): void => {
    const dx = e.changedTouches[0].clientX - touchStart.x
    const dy = e.changedTouches[0].clientY - touchStart.y
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && touchStart.x <= 80) {
            toggleSidebar(true)
        } else {
            toggleSidebar(false)
        }
    }
}

const containerClass = computed(() => [
    {
        'no-navbar': !shouldShowNavbar.value,
        'no-sidebar': !sidebarItems.value.length,
        'sidebar-open': isSidebarOpen.value,
    },
    frontmatter.value.pageClass
])

let unregisterRouterHook;
onMounted(() => {
    const router = useRouter()
    unregisterRouterHook = router.afterEach(() => toggleSidebar(false))
})

onUnmounted(() => {
    unregisterRouterHook()
})
</script>

<template>
    <div class="theme-container" :class="containerClass" @touchstart="onTouchStart" @touchend="onTouchEnd">
        <slot name="navbar">
            <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar">
                <template #before>
                    <slot name="navbar-before" />
                </template>
                <template #after>
                    <slot name="navbar-after" />
                </template>
            </Navbar>
        </slot>

        <div class="sidebar-mask" @click="toggleSidebar(false)" />

        <slot name="sidebar">
            <Sidebar>
                <template #top>
                    <slot name="sidebar-top" />
                </template>
                <template #bottom>
                    <slot name="sidebar-bottom" />
                </template>
            </Sidebar>
        </slot>

        <slot name="page">
            <Transition name="fade-slide-y" mode="out-in">
                <Page :key="page.path">
                    <template #top>
                        <slot name="page-top" />
                    </template>
                    <template #content-top>
                        <slot name="page-content-top" />
                    </template>
                    <template #content-bottom>
                        <slot name="page-content-bottom" />
                    </template>
                    <template #bottom>
                        <slot name="page-bottom" />
                    </template>
                </Page>
            </Transition>
        </slot>
    </div>
</template>

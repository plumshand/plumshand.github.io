<script setup lang="ts">
import { usePageData, usePageFrontmatter } from '@vuepress/client'
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type {
    DefaultThemeNormalPageFrontmatter,
    DefaultThemePageData,
    NavLink,
} from '../../shared'
import { useThemeLocaleData } from '../composables'

const useLastUpdated = (): ComputedRef<null | string> => {
    const themeLocale = useThemeLocaleData()
    const page = usePageData<DefaultThemePageData>()
    const frontmatter = usePageFrontmatter<DefaultThemeNormalPageFrontmatter>()

    return computed(() => {
        const showLastUpdated = frontmatter.value.lastUpdated ?? themeLocale.value.lastUpdated ?? true
        if (!showLastUpdated) {
            return null
        }
        return frontmatter.value.updatedDate
    })
}

const themeLocale = useThemeLocaleData()
const lastUpdated = useLastUpdated()
</script>

<template>
    <footer class="page-meta">
        <div v-if="lastUpdated" class="meta-item last-updated">
            <span class="meta-item-label">{{ themeLocale.lastUpdatedText }}: </span>
            <ClientOnly>
                <span class="meta-item-info">{{ lastUpdated }}</span>
            </ClientOnly>
        </div>
    </footer>
</template>

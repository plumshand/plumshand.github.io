<script setup lang="ts">
import { useThemeLocaleData } from '../composables'

const themeLocale = useThemeLocaleData()

const messages = themeLocale.value.notFound ?? ['Not Found']
const getMsg = (): string =>
    messages[Math.floor(Math.random() * messages.length)]
</script>

<template>
    <div class="theme-container">
        <main class="page">
            <div class="theme-default-content">
                <h1>404 Not Found</h1>

                <blockquote>{{ getMsg() }}</blockquote>
            </div>
        </main>
    </div>
</template>
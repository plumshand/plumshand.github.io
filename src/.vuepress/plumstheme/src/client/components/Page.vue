<script setup lang="ts">
import PageMeta from '@theme/PageMeta.vue'

const year = new Date().getFullYear()
const copyRightYear = (year != 2023) ? `2023 - ${year}` : "2023"
</script>

<template>
    <main class="page">
        <slot name="top" />

        <div class="theme-default-content">
            <slot name="content-top" />

            <Content />

            <slot name="content-bottom" />
        </div>

        <PageMeta />

        <slot name="bottom" />

        <div :class="$style.footer">Copyright &copy; {{copyRightYear}} すももの手</div>
    </main>
</template>

<style lang="scss" module>
.footer {
    text-align: center;
}
</style>

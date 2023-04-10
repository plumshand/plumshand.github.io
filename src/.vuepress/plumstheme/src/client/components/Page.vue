<script setup lang="ts">
import PageMeta from '@theme/PageMeta.vue'
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

        <div :class="$style.footer">Copyright &copy; 2023 すももの手</div>
    </main>
</template>

<style lang="scss" module>
.footer {
    text-align: center;
}
</style>

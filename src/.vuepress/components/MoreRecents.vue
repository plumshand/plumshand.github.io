<script setup lang="ts">
import { usePageData } from '@vuepress/client';

const latestYear = usePageData().value.blogLatestYear;

</script>

<template>
<RouterLink :to="`/blog/${latestYear}/index.html`">
もっと見る
</RouterLink>
</template>
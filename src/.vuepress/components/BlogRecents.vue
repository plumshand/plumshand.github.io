<script setup lang="ts">
import { usePageData } from '@vuepress/client';

const recentBlogs = usePageData().value.recentBlogs;
</script>

<template>
<ul>
    <li v-for="b in recentBlogs">{{ b.date }} <RouterLink :to="`${b.path}`">{{ b.title }}</RouterLink></li>
</ul>
</template>
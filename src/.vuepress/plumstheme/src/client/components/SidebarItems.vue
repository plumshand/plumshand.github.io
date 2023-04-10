<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useSidebarItems } from '../composables'

const route = useRouter()
const sidebarItems = useSidebarItems()

</script>

<template>
    <ul v-if="sidebarItems.length" class="sidebar-items">
    </ul>
</template>

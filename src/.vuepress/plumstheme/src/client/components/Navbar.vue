<script setup lang="ts">
import NavbarBrand from '@theme/NavbarBrand.vue'
import NavbarItems from '@theme/NavbarItems.vue'
import ToggleSidebarButton from '@theme/ToggleSidebarButton.vue'
import { computed, ref } from 'vue'

const linksWrapperMaxWidth = ref(0)
const linksWrapperStyle = computed(() => {
    if (!linksWrapperMaxWidth.value) {
        return {}
    }
    return {
        maxWidth: linksWrapperMaxWidth.value + 'px'
    }
})
</script>

<template>
    <header ref="navbar" class="navbar">
        <ToggleSidebarButton @toggle="$emit('toggle-sidebar')" />

        <span ref="navbarBrand"><NavbarBrand /></span>

        <div class="navbar-items-wrapper" :style="linksWrapperStyle">
            <slot name="before" />
            <NavbarItems class="can-hide" />
            <slot name="after" />
        </div>
    </header>
</template>

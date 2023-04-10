<script setup lang="ts">
const setHeight = (items): void => {
    items.style.height = items.scrollHeight + 'px'
}

const unsetHeight = (items): void => {
    items.style.height = ''
}
</script>

<template>
    <Transition
        name="dropdown"
        @enter="setHeight"
        @after-enter="unsetHeight"
        @before-enter="setHeight">
        <slot />
    </Transition>
</template>

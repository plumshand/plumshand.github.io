<script setup lang="ts">
import AutoLink from '@theme/AutoLink.vue'
import DropdownTransition from '@theme/DropdownTransition.vue'
import { computed, ref, toRefs, watch, nextTick } from 'vue'
import type { PropType } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
    item: {
        type: Object as PropType<Exclude<ResolvedNavbarItem, NavbarItem>>,
        required: true,
    }
})

const { item } = toRefs(props)

const dropdownAriaLabel = computed(() => item.value.ariaLabel || item.value.text)

const open = ref(false)
const dropdownEl = ref<HTMLUListElement>();
const rootEl = ref<HTMLDivElement>();
const route = useRoute()

const onHover = async () => {
    await nextTick();

    if (!rootEl.value || !dropdownEl.value) return;

    const rootBR = rootEl.value.getBoundingClientRect();

    let left = rootBR.left;
    const top = rootBR.top + rootEl.value.offsetHeight;

    let width = dropdownEl.value.scrollWidth;

    if (width > window.innerWidth) {
        width = window.innerWidth;
        left = 0;
    } else {
        if (left + width - window.scrollX > window.innerWidth) {
            left = window.innerWidth - width + window.scrollX;
        }

        if (left < 0) {
            left = 0;
        }
    }

    dropdownEl.value.style.top = `${top}px`;
    dropdownEl.value.style.left = `${left}px`;

    if (width) {
        dropdownEl.value.style.width = `${width}px`;
    } else {
        dropdownEl.value.style.width = '';
    }
};

watch(open, value => {
    if (value) onHover();
});

watch(
    () => route.path,
    () => { open.value = false }
)

const handleDropdown = (e): void => {
    const isTriggerByTab = e.detail === 9
    if (isTriggerByTab) {
        open.value = !open.value
    } else {
        open.value = false
    }
}

const isLastItemOfArray = (item: unknown, arr: unknown[]): boolean => arr[arr.length - 1] === item
</script>

<template>
    <div class="navbar-dropdown-wrapper" ref="rootEl" :class="{ open }" @touchstart.self="onHover" @mouseover.self="onHover">
        <button
            class="navbar-dropdown-title"
            type="button"
            :aria-label="dropdownAriaLabel"
            @click="handleDropdown"
            @touchstart="onHover"
            @mouseover="onHover">
            <span class="title">{{ item.text }}</span>
            <span class="arrow down"></span>
        </button>

        <button class="navbar-dropdown-title-mobile" type="button" :aria-label="dropdownAriaLabel" @click="open = !open">
            <span class="title">{{ item.text }}</span>
            <span class="arrow" :class="open ? 'down' : 'right'"></span>
        </button>

        <DropdownTransition>
            <ul v-show="open" class="navbar-dropdown">
                <li v-for="child in item.children" :key="child.text" class="navbar-dropdown-item">
                    <template v-if="child.children">
                        <h4 class="navbar-dropdown-subtitle">
                            <AutoLink
                                v-if="child.link"
                                :item="child"
                                @focusout="
                                    isLastItemOfArray(child, item.children) &&
                                        child.children.length === 0 &&
                                        (open = false)
                                "
                            />
                            <span v-else>{{ child.text }}</span>
                        </h4>

                        <ul class="navbar-dropdown-subitem-wrapper">
                            <li v-for="grandchild in child.children" :key="grandchild.link" class="navbar-dropdown-subitem">
                                <AutoLink
                                    :item="grandchild"
                                    @focusout="
                                        isLastItemOfArray(grandchild, child.children) &&
                                            isLastItemOfArray(child, item.children) &&
                                            (open = false)
                                    "
                                />
                            </li>
                        </ul>
                    </template>

                    <template v-else>
                        <AutoLink
                            :item="child"
                            @focusout="
                                isLastItemOfArray(child, item.children) && (open = false)
                            "
                        />
                    </template>
                </li>
            </ul>
        </DropdownTransition>
    </div>
</template>

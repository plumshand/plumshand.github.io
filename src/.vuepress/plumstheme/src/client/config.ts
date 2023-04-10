import { defineClientConfig } from "@vuepress/client";
import { h } from 'vue';
import { setupSidebarItems } from './composables';
import Layout from './layouts/Layout.vue';
import NotFound from './layouts/NotFound.vue';

import './styles/index.scss'

export default defineClientConfig({
    enhance({ app, router }) {
        app.component('AutoLinkExternalIcon', () => {
            const ExternalLinkIcon = app.component('ExternalLinkIcon');
            if (ExternalLinkIcon) {
                return h(ExternalLinkIcon);
            }
            return null;
        });
    },
    setup() {
		setupSidebarItems()
    },
    layouts: {
        Layout,
        NotFound
    }
})

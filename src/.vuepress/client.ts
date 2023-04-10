import { defineClientConfig } from '@vuepress/client'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faSoundcloud,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'

export default defineClientConfig({
    enhance({ app, router, siteData }) {
        app.component('fa', FontAwesomeIcon)
        library.add(faSoundcloud)
        library.add(faTwitter)
        library.add(faYoutube)
    }
})
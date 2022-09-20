import './bootstrap';

import { createApp } from 'vue'
import router from './router.js'

import app from './components/app.vue'
import App from './layouts/App.vue'

createApp(app)
createApp(App)
    .use(router)
    .mount("#app")
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

import './assets/main.css'  // optional, create if you want custom styles

createApp(App).use(router).mount('#app')

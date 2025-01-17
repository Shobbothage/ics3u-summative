import './style.css'
import App from './App.vue'
import router from "./router/index"
import { createApp } from 'vue'
import { createPinia } from 'pinia'

createApp(App).use(router).mount('#app')

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)

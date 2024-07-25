import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import {createPinia} from 'pinia'

const store = createPinia()

createApp(App)
  .use(ElementPlus, {
    locale: zhCn,
  }).use(store)
  .mount('#app')

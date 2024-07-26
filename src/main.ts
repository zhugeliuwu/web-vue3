import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import router from '@/router'
import pinia from '@/store'
// 引入模板的全局的样式
import '@/styles/index.scss'

import 'element-plus/dist/index.css'
// 黑暗模式
import 'element-plus/theme-chalk/dark/css-vars.css'

createApp(App)
  .use(ElementPlus, {
    locale: zhCn,
  }).use(router).use(pinia)
  .mount('#app')

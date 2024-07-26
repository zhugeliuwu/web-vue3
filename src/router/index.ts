// 使用 vue-router 配置路由
import { createRouter, createWebHistory } from 'vue-router'

const constantRouter = [
    {
        path: '/',
        name: 'layout',
        component: () => import('@/views/Layout/index.vue')
    },
    // 登录
    {
        path: '/welcome',
        component: () => import('@/views/System/index.vue'),
        name: 'welcome',
        redirect: '/login',
        children: [
            {
                path: '/login',
                component: () => import('@/views/System/Login/index.vue'),
                name: 'welcome-login',
            },
            {
                path: '/register',
                component: () => import('@/views/System/Register/index.vue'),
                name: 'welcome-register',
            },
            {
                path: '/reset',
                component: () => import('@/views/System/Reset/index.vue'),
                name: 'welcome-reset',
            }
        ]
    },
]

let router = createRouter({
    // 路由模式 History
    history: createWebHistory(),
    routes: constantRouter
})
export default router
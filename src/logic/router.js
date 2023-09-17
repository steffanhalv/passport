import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routes = [{
        path: '/',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/admin',
        component: () => import('@/views/Admin.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            top: 0
        }
    }
})

export default router
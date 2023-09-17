import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routes = [{
    path: '/',
    component: () => import('@/views/Home.vue')
},
{
    path: '/about',
    component: () => import('@/views/About.vue')
},
{
    path: '/contact',
    component: () => import('@/views/Contact.vue')
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
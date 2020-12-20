import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/home'
    },

    {
        path: '/home',
        meta: {
            title: '首页'
        },
        component: () => import('../views/Home'),
        children: [
            {
                path: 'news',
                component: () => import('../views/home/News'),
            },
            {
                path: 'message',
                component: () => import('../views/home/Message'),
            }
        ]

    },

    {
        path: '/about',
        meta: {
            title: '关于'
        },
        component: () => import('../views/About')
    },

    {
        path: '/user/:id',
        meta: {
            title: '用户'
        },
        component: () => import('../views/User')
    },
    {
        path: '/axios/test',
        meta: {
            title: 'axios测试'
        },
        component: () => import('../views/AxiosTest')
    },
    {
        path: '/axios/create',
        meta: {
            title: 'axios测试'
        },
        component: () => import('../views/AxiosCreate')
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router

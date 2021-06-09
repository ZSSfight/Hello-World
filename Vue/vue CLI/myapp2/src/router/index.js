import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '../views/Film.vue'
import Cinema from '../views/Cinema.vue'
import Center from '../views/Center.vue'
import Detail from '../views/Detail.vue'
import Login from '../views/Login.vue'

import Nowplaying from '../views/film/Nowplaying.vue'
import Comingsoon from '../views/film/Comingsoon.vue'
Vue.use(VueRouter) // 注册模块, router-view已注册

const routes = [{
            path: '/film',
            component: Film,
            children: [{
                    path: 'nowplaying',
                    component: Nowplaying
                },
                {
                    path: 'comingsoon',
                    component: Comingsoon
                },
                {
                    path: '',
                    redirect: '/film/nowplaying'
                }
            ]
        }, //路由懒加载，即按需加载组件
        {
            path: '/cinema',
            component: () =>
                import ('../views/Cinema.vue')
        },
        {
            path: '/center',
            component: () => {
                import ('../views/Center.vue')
            }
        }, {
            path: '/login',
            component: () =>
                import ('../views/Login.vue')
        }, {
            path: '/detail/:myid', // 动态路由。id不同，不可提前预知列表信息id路径。则使用动态路由。记得动态要加：（冒号）
            component: Detail
                // name: zssDetail  (命名路由)
        }, {
            path: '*', // 通配符优先级最低,（乱打地址）
            redirect: '/film'
        }
    ]
    //全局路由守卫
const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    const auth = ['/order', '/center', '/money', '/card'];
    if (auth.includes(to.fullPath)) {
        if (!localStorage.getItem('token')) {
            next('/login')
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
/**
 * 实现路由分离子模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
//导入对应的组件模块start
import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import search from './components/tabbar/search.vue'
import shopCar from './components/tabbar/shopCar.vue'
import newList from './components/newsList/newList.vue'
import newsinfo from './components/newsList/newsinfo.vue'
//导入对应的组件模块end


//创建router路由实例
//以及实现的路由嵌套
//修改router-link链接中的激活类：router-link-active属性 linkActiveClass:mui-active
Vue.use(VueRouter)
var router = new VueRouter({
        routes: [{
                path: '/home',
                component: home
            },
            { path: '/', redirect: '/home' },
            { path: '/member', component: member },
            { path: '/shopCar', component: shopCar },
            { path: '/search', component: search },
            { path: "/home/newList", component: newList },
            { path: "/home/newsinfo/:id", component: newsinfo }

        ],
        linkActiveClass: "mui-active"
    })
    //向外暴露路由对象
export default router
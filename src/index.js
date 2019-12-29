// const $ = require("jquery");
// import $ from 'jquery'

// import 'bootstrap/dist/css/bootstrap.css'

import './css/index.css'
import Vue from 'vue'
import router from './router.js'
import app from './app.vue'
import vueResource from 'vue-resource'
//导入mint-ui模块：所有的模块都导出start
import 'mint-ui/lib/style.css'
import { Header, Swipe, SwipeItem } from 'mint-ui'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header)

//导入mint-ui模块：所有的模块都导出end
//mui-start
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

Vue.use(vueResource)

var vm = new Vue({
    el: '#app',
    data: {
        msg: "怎么了，你累了，说好的,幸福呢"
    },
    methods: {},
    // components: {
    //     login
    // }
    //可以使用render来覆盖<div id="app">控制的区域
    render: function(createElements) {
        return createElements(app)
    },
    router: router,


});
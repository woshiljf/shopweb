// const $ = require("jquery");
// import $ from 'jquery'

// import 'bootstrap/dist/css/bootstrap.css'

import './css/index.css'
import Vue from 'vue'
import router from './router.js'
import app from './app.vue'
//导入mint-ui模块：所有的模块都导出start
import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui'
//导入mint-ui模块：所有的模块都导出end
//mui-start
import './lib/mui/css/mui.css'
import './lib/mui/js/mui.js'
//abc
//
Vue.component(Header.name, Header)

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
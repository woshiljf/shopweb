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
import { Header, Swipe, SwipeItem, Button, Spinner } from 'mint-ui'
Vue.component(Spinner.name, Spinner);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)

//导入mint-ui模块：所有的模块都导出end
//mui-start
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
//导入时间格式话插件
import moment from 'moment'
Vue.use(vueResource)

//定义全局过滤器，进行时间格式化，第二个参数为时间默认格式
Vue.filter('dateFormat', function(dateStr, pattern = "YYYY-MM-DD: HH:MM:SS") {

    // var dt = new Date(date);
    // var Y = dt.getFullYear();
    // var MM = dt.getMonth() + 1
    // var D = dt.getDate();
    // return `${Y}年${MM}月${D}日`;
    return moment(dateStr).format(pattern)

})
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
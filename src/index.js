// const $ = require("jquery");
// import $ from 'jquery'

// import 'bootstrap/dist/css/bootstrap.css'

import './css/index.css'
import Vue from 'vue'
import router from './router.js'
import app from './app.vue'
import vueResource from 'vue-resource'
//图片缩略图功能差距
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)
    //导入vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//导入mint-ui模块：所有的模块都导出start
import 'mint-ui/lib/style.css'
// import { Header, Swipe, SwipeItem, Button, Spinner, Lazyload } from 'mint-ui'
// Vue.component(Spinner.name, Spinner);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Header.name, Header)
// Vue.component(Button.name, Button)
import MintUi from 'mint-ui'
Vue.use(MintUi);

//导入mint-ui模块：所有的模块都导出end
//mui-start
import './lib1/mui/css/mui.css'
import './lib1/mui/css/icons-extra.css'
//导入时间格式话插件
import moment from 'moment'
import VueRouter from 'vue-router'
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

// 购物车商品购买信息浏览器加载就从本地获取
var car = JSON.parse(localStorage.getItem('car') || '[]');

//创建Vuex实例对象

var store = new Vuex.Store({
    state: {
        car: car //数组:数组对象中包括{id:商品id,count:购买数量,price：商品价格,select:是否选中（用于一键结账使用)}
    },
    mutations: {
        //调用方法:this.$store.commit("方法名称","参数")
        addToCar(state, goodsinfo) {
            //商品信息保存到car
            //先做判断,判断car中是否已经保存了之前的信息，如果有，则更新count即可
            //如果没有，这car.push(goodsinfo)
            var flag = state.car.some(item => {
                if (item.id === goodsinfo.id) {
                    item.count = parseInt(item.count) + parseInt(goodsinfo.count);
                    return true;
                }
            })
            if (!flag) {
                state.car.push(goodsinfo);
            }
            //商品信息保存到本地localStorage
            localStorage.setItem('car', JSON.stringify(state.car));
        },
        updateGoodsInfo(state, goodsinfo) {
            state.car.some(item => {
                    if (item.id === goodsinfo.id) {
                        item.count = parseInt(goodsinfo.count);
                        return;
                    }
                })
                //更改了car之后，重新上传值localStoreage
            localStorage.setItem('car', JSON.stringify(state.car));
        },
        deleGoods(state, id) {
            state.car.some((item, i) => {
                    if (item.id == id) {
                        state.car.splice(i, 1);
                        return true;
                    }
                })
                //更改了car之后，重新上传值localStoreage
            localStorage.setItem('car', JSON.stringify(state.car));
        },
        updateGoodsSelected(state, info) {
            state.car.some(item => {
                if (item.id == info.id) {
                    item.selected = info.selected;
                    return true;
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car));
        }
    },
    getters: {
        //调用方法:this.$store.getters.方法
        //购物车徽标
        //getters:相当于computers
        getAllCount(state) {
            var count = 0;
            state.car.forEach(element => {
                count += parseInt(element.count);
            });
            return count;
        },
        //获取商品car中对应的id的count:如id:8,count:33,则对象为{8:33}
        getCount(state) {
            var o = {};
            state.car.forEach(item => {
                o[item.id] = item.count;
            })
            return o;
        },
        goodsSelected(state) {
            var o = {};
            state.car.forEach(item => {
                o[item.id] = item.selected;
            })
            return o;
        },
        getAllCountAndAmount(state) {
            var o = {
                count: 0,
                amount: 0
            };
            state.car.forEach(item => {
                if (item.selected == true) {
                    o.count += parseInt(item.count);
                    o.amount = o.count * parseInt(item.price);
                }
            })
            return o;
        }
    }
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
    store, //Vuex创建的对象挂载到vue，全局使用


});
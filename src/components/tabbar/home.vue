<template>
    <div>
        <!-- 1：轮播图</h2> -->
         <swiper :lunbotu="lunbotuList"></swiper>
        <!--2： 6宫格区域 -->
        <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newList">
		                    <img src="../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻咨询</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/PhotoList">
		                     <img src="../../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodsList">
		                    <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		          	           
		        </ul> 
		</div>
       
          <router-view></router-view>
    </div>
</template>

<script>
import swiper from '../subcompinents/swiper.vue'
import lunbotu from '../../lunbotu.json'
import {Toast} from 'mint-ui'
export default {
    data:function(){
        return {
            msg:"我是home组件",
            lunbotuList:[]
        }
    },
    created() {
        this.getImg();
    },

    methods: {
        getImg(){
            // this.$http.get("http://vue.studyit.io/api/getlunbo").then(result=>{
            //     if(result.body.status==0){
            //         this.lunbotuList=result.body.message
            //     }else{
            //           Toast("轮播图加载失败")
            //     }               
            // })
            //没有服务器，手动添加数据
            this.lunbotuList = lunbotu;

            
            
        }
    },
    components:{
        swiper
    }
    
}
</script>

<style lang="scss" scoped>
 
   .mui-grid-view.mui-grid-9{
       background-color: #fff;
       li{
           border: 0
       }
   }

   .mui-content {
       img{
           width: 60px;
       }
   }
   
   
</style>
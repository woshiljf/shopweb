
<template>
    <div  class="appContainer">
        <!-- 头部start -->
        <mt-header fixed title="龙卷风-vue">
            <router-link to="/" slot="left">
               <mt-button icon="back" @click="back">返回</mt-button>
            </router-link>
        </mt-header>
        <!-- 头部end -->
        <!-- 中间组件start -->
      <transition>
        <router-view></router-view>
      </transition>
        <!-- 中间组件end -->
     
        
        <nav class="mui-bar mui-bar-tab">
			<router-link  class="mui-tab-item1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link  class="mui-tab-item1" to="/shopCar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span id="badge" class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link  class="mui-tab-item1" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

      
    
    </div>
</template>



<script>
//导入Toast

import { Toast } from 'mint-ui';

export default {
   data:function(){
       return {
           msg:"我是.vue方式的组件",
           ToastInstance:null
       }
   },
   created() {
      
   },
   
   methods:{
  
         back(){
           this.$router.go(-1);
         }
     
       
   },
    mounted() {
       
    }
    
}
</script>


<style lang="scss" scoped>
  .mint-header.is-fixed {
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 999;
}

  .appContainer{
      padding-top:40px;
      overflow-x: hidden;
      padding-bottom: 50px;
      
  }
 
  .v-enter{
      opacity: 0;
      transform: translateX(100%);
  }
  .v-leave-to{
      opacity: 0;
      transform: translateX(-100%);
      position: absolute;
  }
  .v-enter-active,
  .v-leave-active{
      transition: all 0.3s ease;
  }
//这个地方是重点修改：注意
  //修改冲突类名mui-tab-item-->改为：mui-tab-item1
  .mui-bar-tab .mui-tab-item1.mui-active {
    color: #007aff;
}
  .mui-bar-tab .mui-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
  .mui-bar-tab .mui-tab-item1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item1 .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>

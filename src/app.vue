
<template>
    <div  class="appContainer">
        <!-- 头部start -->
        <mt-header fixed title="龙卷风-vue">
            <router-link to="/" slot="left">
               <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <!-- 头部end -->
        <!-- 中间组件start -->
      <transition>
        <router-view></router-view>
      </transition>
        <!-- 中间组件end -->
     
        
        <nav class="mui-bar mui-bar-tab">
			<router-link  class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link  class="mui-tab-item" to="/shopCar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link  class="mui-tab-item" to="/search">
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
  

     
       
   },
    mounted() {
       
    }
    
}
</script>


<style lang="scss" scoped>
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
  
</style>

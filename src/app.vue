
<template>
    <div  class="appContainer">
        <mt-header fixed title="龙卷风-vue"></mt-header>

        <h2>{{msg}}</h2>

        <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</a>
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
      
  }
</style>

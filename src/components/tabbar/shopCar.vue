<template>
    <div>
        <div class="mui-card" v-for="(item,index) in goodsList" :key="item.id"> 
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="$store.getters.goodsSelected[item.id]" @change="changeSelected(item.id,$store.getters.goodsSelected[item.id])"></mt-switch>
                        <img src="../../images/lyf/1.jpg" alt="">
                        <div class="info">
                            <h2>李亦非仙女姐姐购买订单</h2>
                            <p>
                                <span class="price">￥{{item.price}}</span>
                                <number :goodsCount="$store.getters.getCount[item.id]" :goodsid="item.id"></number>
                                <a href="javascript:;" @click="remove(item.id,index)">删除</a>
                            </p>
                        </div>
					</div>
				</div>
		</div>

        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner check">
						<div><p>总计(不含运费)</p>
                        
                        <p>已勾选商品<span class="red">{{$store.getters.getAllCountAndAmount.count}}</span>件，总价<span class="red">￥{{$store.getters.getAllCountAndAmount.amount}}</span></p></div>
                        
                        <mt-button type="danger" size="normal">结算</mt-button>
					</div>
                      
				</div>
		</div>
        
    </div>
</template>
<script>
import number from '../subcompinents/shopCarNumber.vue'
export default {
    data() {
        return {
            goodsList:[],
        }
    },
    created() {
        this.getGoodsInfo();
      
    },
    methods: {
        //没有服务器，暂时用假的数据替换
        //在有服务器的时候，可以从store中获取到数据，然后把对应的商品id发送到服务器，服务器返回商品对应的信息，渲染到页面
        getGoodsInfo(){
            this.goodsList = this.$store.state.car;
        },
        remove(id,index){
            this.goodsList.splice(index,1);
            this.$store.commit('deleGoods',id);
        },
        changeSelected(id,val){
            this.$store.commit("updateGoodsSelected",{
                id:id,
                selected:val
            });
       
        },
      
    },
    components:{
        number
    }
}
</script>

<style lang="scss" scoped>
  .mui-card-content{
      .mui-card-content-inner{
          display: flex;
          align-items: center;
          justify-content: space-between;
          img{
              width: 50px;
              height: 50px;
          }
          .info{
              h2{
                  font-size: 14px;
                  text-align: center;
              }
              .price{
                  color: red;
                  font-weight: bolder;
              }
          }
      }
      .check{
          
          p{
              font-size: 16px;
              .red{
              color: red;
              font-weight: bolder;
          }
          }
      }
  }
   
</style>
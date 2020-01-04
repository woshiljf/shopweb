<template>
    <div class="goods-list">

        <div class="item" v-for="(item,i) in goods" :key="i" @click="goodsInfo(i)">
           <div class="imgBox">
               <img :src="item.src" alt="">
                <h3>{{item.info}}</h3>
           </div>
           <div class="desc">
              
               <div class="price">

                    <span class="now-price">￥{{item.sell_price}}</span>
                    <span class="old-price">￥{{item.market_price}}</span>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>{{item.mount}}</span>
                    </p>
               </div>
           </div>
        </div>
       
        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>

        
        
        
        
    </div>
</template>

<script>
  //页面中的商品，从服务器上获取，没有服务器，暂时用假的数据来模拟
        //注意点:数据请求时，有页数的规定，每次请求10个，在点击加载更多时，pageIndx自增，重新发送请求
        //注意点：把最新的数据拼接到第一次数据的后面this.goodList.concat(result.body.message)
//导入数据
import goodsList from '../../goodsList.json'
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            msg:"数据",
            pageIndex:10,
            goods:[],
            start:0
            
        }
    },
    created() {
        this.getGoodsList();
    },
    methods: {
   //模拟加载更多的案例
       getGoodsList(){
        //    console.log(goodsList);
        //    goodsList.forEach((item,i) => {
        //        if(i<this.pageIndex){
        //            this.goods.push(item);
        //        }else{
        //            return;
        //        }
        //    });
        for(let i=this.start;i<this.pageIndex;i++){
            this.goods.push(goodsList[i]);
            if(this.start>goodsList.length){
               Toast("没有更多商品了");
               return;
            }
                        
        }

       },
       getMore(){
           this.start = this.pageIndex;
           this.pageIndex+=10;
           this.getGoodsList();
       },
       goodsInfo(id){

           //在这里不用之前传统的方法，使用标签式的导航，这里使用编程式页面跳转，详情可以查看(https://router.vuejs.org/zh/guide/essentials/navigation.html)
           //这里使用了其中的一种页面调整的方法，更多可以查看官网的提供。
           this.$router.push({ name: 'goodsinfo', params: { id: id }})

           
         
       }

    },
}
</script>




<style lang="scss" scoped>
  .goods-list{

      padding: 10px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .item{
          width: 49%;
          min-height: 275px;
          border: 1px solid #ccc;
          box-shadow: 0 0 8px #ccc;
          margin-bottom: 5px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .imgBox{
              img{
                  width: 100%;
              }           
            h3{
                margin: 0;
                padding: 0 5px;
                font-size: 16px;

            }
          }
      }
      .desc{

        .price{
            background-color: #eee;
            margin: 0px 4px;
            .now-price{
                color: red;
                font-weight: bolder;
                margin-right: 10px;
            }
            .old-price{
                color: #ccc;
                text-decoration: line-through;
                font-size: 15px;
            }
            .sell{
                margin: 0;
                display: flex;
                justify-content: space-between;
                margin-top: 5px;
            }
            
        }
      }
    
      
  }
</style>
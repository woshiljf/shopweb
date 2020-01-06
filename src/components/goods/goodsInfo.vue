<template>
    <div class="goodsinfo-container">
		<transition 
		@before-enter="beforeEnter"
		@enter="enter"
		@after-enter="afterEnter"
		>
		<div class="ball" v-show="ballFlag" ref='ball'></div>
		
		</transition>
       <!-- 轮播图 -->
       <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swiper :lunbotu="goodsImg"></swiper>
					</div>
				</div>
		</div>
        <!-- 商品详情 -->
        <div class="mui-card">
				<div class="mui-card-header">刘亦菲仙女姐姐在线购买</div>
				
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>
							市场价：<del>￥2399</del>&nbsp;&nbsp;销售价：<span class="now_price">￥2199</span>
						</p>
						<span>购买数量：</span>
					    <number @numberValue="getValue" :max='maxMount'></number>
						<div class="btn_box">
							<mt-button type="primary" size="small" >立即购买</mt-button>
							<mt-button type="danger" size="small" @click="addCar">加入购物车</mt-button>
						</div>
						
					</div>
				</div>
			
		</div>
		<!-- 加入购物车的小球动画 -->
	
        <!-- 商品参数 -->
        <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					 <p>商品货号:</p>
					  <p>库存情况:</p>
					  <p>上架时间:</p>
					</div>
				</div>
				<div class="mui-card-footer">
					<mt-button type="primary" size="large" plain @click="goodsdetail(id)">商品详情</mt-button>
					<mt-button type="danger" size="large" plain @click="goodsComment(id)">商品评论</mt-button>
				</div>
			</div>

    
	
	
	
	
	
	</div>
</template>

<script>
import swiper from '../subcompinents/swiper.vue'
import lyf from '../../lunbotu.json'
import {Toast} from 'mint-ui'
import number from '../subcompinents/number.vue'
export default {
    data() {
		return {
			id:this.$route.params.id,
			maxMount:15,
			goodsImg:[],
			ballFlag:false,
			count:1,
			selected:false

		}
	},
	created() {
		this.getGoodInfoList();
	},
	methods: {
		getGoodInfoList(){
			this.goodsImg = lyf;
			
		},
		goodsdetail(id){
			this.$router.push({name:"goodsdetail",params:{id}})
		},
		goodsComment(id){
			this.$router.push({name:"goodsComment",params:{id}})
		},
		addCar(){
			this.ballFlag = !this.ballFlag;
		   //要加入store保存的数组对象
		   var goodsinfo = {
				id:this.id,
				count:this.count,
				price:2399,
				selected:true
			}
		this.$store.commit('addToCar',goodsinfo);
			
			
		},
		//购物小球动画
		beforeEnter(el){
            el.style.transform = 'translate(0,0)'
		},
		enter(el,done){
			//由于不同的分辨率或者频幕滑动的愿意，translate()不能固定的写死,应该动态的获取小球的位置和购物车小数量标志的位置
			//获取小球在页面中的位置
			const ballPosition = this.$refs.ball.getBoundingClientRect();
			//获取购物车徽标的位置
			const badgePosition = document.getElementById('badge').getBoundingClientRect();
			const xDist = badgePosition.left - ballPosition.left;
			const yDist = badgePosition.top - ballPosition.top;
			
			
			
			el.offsetWidth;
			el.style.transform=`translate(${xDist}px,${yDist}px)`;
			el.style.transition = 'all 0.8s cubic-bezier(.73,-0.14,1,.24)';
			done();
		},
		afterEnter(){
			this.ballFlag = !this.ballFlag;
		},

		//父组件接收来自子组件的传值
		//接下来就是父组件向子组件传值了，这里可以直接使用数值绑定的方式就行。注意点的是
		getValue(num){
			// console.log(num);
			this.count = num;
		}
		
		
		
		
		
	},
	components:{
		swiper,
		number
	}
}
</script>

<style lang="scss" scoped>
.goodsinfo-container{
    background-color: #eee;
    overflow: hidden;
	.mui-card-content{
		.now_price{
			color: red;
			font-weight: bolder;
		}
		.btn_box{
			margin-top: 8px;
		}
	}
	.mui-card-header, .mui-card-footer {
		display: block;
		button:nth-child(1){
			margin-bottom: 10px;
		}
	}
	.ball{
		width: 20px;
		height: 20px;
		border-radius: 50%;
		position: absolute;
		top:386px;
		left: 150px;
		background-color: red;
		z-index: 1000;
		// transform: translate(85px,230px)
	}
}
</style>
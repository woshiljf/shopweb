<template>
    <div class="container">
       <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media itemLi" v-for="item in newlist" :key="item.id" @click="getNews(item.time,item.title,item.content)">
					<!-- v-bind:绑定属性时，应该注意，绑定的是方法 -->
                    <router-link :to="'/home/newsinfo/'+1">
                    <!-- <router-link to="#"> -->
                    <!-- <router-link :href="item.url"> -->
                    
						<img class="mui-media-object mui-pull-left" :src="item.pic">
						<div class="mui-media-body">
							<h3 class="mui-ellipsis">{{item.title}}</h3>
                            <p class="time">
                                <span>发表时间:{{item.time|dateFormat("YYYY-MM-DD")}}</span>
                                <span>{{item.src}}</span>
                            </p>
						</div>
                    </router-link>
				</li>
			
				<!-- <li class="mui-table-view-cell mui-media">
					<a href="javascript:;" class="">
						<img class="mui-media-object mui-pull-left" src="../../images/cbd.jpg">
						<div class="mui-media-body">
						
							<h3 class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</h3>
                             <p class="time">
                                <span>发表时间:2019-12-31</span>
                                <span>点击:10次</span>
                            </p>
						</div>
					</a>
				</li> -->

			</ul>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
   
    data() {
        return {
            newlist:[
                {id:1,imgsrc:'../../images/cbd.jpg',newText:'我只能永远读着对白，读着我给你的伤害，我原谅不了我，就请你当作我不在',time:new Date(),count:Math.floor((Math.random()*1000)+1)},
                {id:2,imgsrc:'../../images/shuijiao.jpg',newText:'天青色等烟雨，而我在等你',time:new Date(),count:Math.floor((Math.random()*1000)+1)},
                {id:3,imgsrc:'../../images/cbd.jpg',newText:'久未放晴的天空，依旧留着你的笑容，哭过，却无法掩埋歉疚',time:new Date(),count:Math.floor((Math.random()*1000)+1)},
                {id:4,imgsrc:'../../images/cbd.jpg',newText:'你确定这就是爱吗，真的爱我吗',time:new Date(),count:Math.floor((Math.random()*1000)+1)},
                {id:5,imgsrc:'../../images/yuantiao.jpg',newText:'泛着我们的照片，想念若隐若现，去年的冬天，我们还笑着很甜',time:new Date(),count:Math.floor((Math.random()*1000)+1)},
                {id:6,imgsrc:'../../images/cbd.jpg',newText:'我爱你轰轰烈烈到绝望，我的梦狠狠碎过却不会忘',time:new Date(),count:Math.floor((Math.random()*1000)+1)},
                {id:7,imgsrc:'../../images/cbd.jpg',newText:'你算什么男人，算什么男人，还爱着她，却不不敢叫她再等',time:new Date(),count:Math.floor((Math.random()*1000)+1)},
                {id:8,imgsrc:'../../images/cbd.jpg',newText:'你算什么男人，算什么男人，还爱着她，却不不敢叫她再等',time:new Date(),count:Math.floor((Math.random()*1000)+1)},
                {id:9,imgsrc:'../../images/cbd.jpg',newText:'你算什么男人，算什么男人，还爱着她，却不不敢叫她再等',time:new Date(),count:Math.floor((Math.random()*1000)+1)},
            ]
        }
    },
    created() {
        this.getNewsinfo();
    },
    methods: {
           getNewsinfo(){

            this.$http.get('https://api.jisuapi.com/news/get?channel=头条&start=10&num=40&appkey=f437c5142449d9de').then(function(response){

                  if(response.body.status===0){
                       this.newlist=response.body.result.list;        
                  }else{
                       Toast('请求数据失败或次数已经到达')
                  }          
                
            })                      
        },
        getNews(date,title,content){
            //把最新的title,time,content放入localStorage
            
             var news = {
                   date:date,
                   title:title,
                   content:content
            };
            // console.log(news);
            localStorage.setItem('news', JSON.stringify([]));
            var list=[];
            list.unshift(news);
            localStorage.setItem('news',JSON.stringify(list));


            
            
        }
        
        
    },


    
    
    
    
}
</script>

<style lang="scss" scoped>
   .mui-table-view{
       li{
           h3{
               color: #FF9966;
               font-size: 18px;
           }
           .time{
               display: flex;
               justify-content: space-between;
               font-size: 15px;
               span:nth-child(2){
                   color: red
               }
           }
       }
      
   }
</style>
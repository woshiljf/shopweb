<template>
    <div>
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
                        <!-- 重新回顾绑定类表达式的写法。 -->
						<a :class="['mui-control-item',item.id==0?'mui-acitve':'']" href="#" data-wid="tab-top-subpage-1.html" v-for="item in categorys" :key="item.id" @click="getImgs(item.id)">
							{{item.title}}
						</a>

                       
					
					</div>
				</div>

		</div>
        <!-- //图片列表懒加载技术的使用 -->

        
    </div>
    
</template>


<script>
    //mui 头部滑动需要被初始化
    // 导入包
    import  mui from '../../lib/mui/js/mui.js'

  
    export default {
        data() {
            return {
                categorys:[
                    {id:0,title:"全部"},
                    {id:1,title:"推荐"},
                    {id:2,title:"热点"},
                    {id:3,title:"北京"},
                    {id:4,title:"美女"},
                    {id:5,title:"娱乐"},
                    {id:6,title:"社会"},
                    {id:7,title:"足球"},
                    {id:8,title:"CBA"},
                    {id:9,title:"NBA"},
                ]
            }
        },
        methods: {

               getImgs(imgId){

                   this.$http.get('https://image.baidu.com/search/index?tn=baiduimage&ipn=r&ct=201326592&cl=2&lm=-1&st=-1&fm=index&fr=&hs=0&xthttps=111111&sf=1&fmq=&pv=&ic=0&nc=1&z=&se=1&showtab=0&fb=0&width=&height=&face=0&istype=2&ie=utf-8&word=%E5%91%A8%E6%9D%B0%E4%BC%A6&oq=%E5%91%A8%E6%9D%B0%E4%BC%A6&rsp=-1').then(response=>{
                          console.log(response);
                   }
                      
              )
                   
                   
               }
            
            
        },

        mounted() {
            //当组件中的dom解构被渲染好放到页面中后，执行的钩子函数
        // 操作元素，尽量在mounted里面操作，此时所有的dom元素加载完毕.
              mui('.mui-scroll-wrapper').scroll({
                    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
                });

        },
        
    }
</script>



<style lang="scss" scoped>
 
</style>
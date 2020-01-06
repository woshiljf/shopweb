<template>
    <div class="photoList-container">
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
        <ul>
            <!-- //这里使用索引i来模拟id -->
            <router-link v-for="(item,i) in list" :key="i" :to="'/home/photoinfo/'+(i+1)" tag="li">
                <img v-lazy="item">
                <div class="info">
                    <div class="title"></div>
                    <div class="abstract"></div>
                </div>
                
            </router-link >
            
        </ul>

        
    </div>
    
</template>


<script>
    //mui 头部滑动需要被初始化
    // 导入包
    
    import  mui from '../../lib1/mui/js/mui.js'
    
    import imgUrl from '../../imgurl.json'
    
    
    export default {
        data() {
            return {
                categorys:[
                    {id:0,title:"全部"},
                    {id:1,title:"刘亦菲"},
                    {id:2,title:"周杰伦"},
                    {id:3,title:"nba"},
                    {id:4,title:"美女"},
                    {id:5,title:"娱乐"},
                    {id:6,title:"社会"},
                    {id:7,title:"足球"},
                    {id:8,title:"CBA"},
                    {id:9,title:"NBA"},
                ],
                list:[
                  
                ]
             
            }
           
        },
        created() {
            this.getImgs(0);
        },
        methods: {

               getImgs(imgId){

                //    this.$http.get('http://').then(response=>{
                //           console.log(response);
                //    }
                //    )
                //从本地读取所有的指定的文件路径，添加到数组
               
                this.list = imgUrl[imgId].url;
                // console.log(imgUrl[imgId]);
                
           
          
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

.photoList-container{
      ul{
          margin: 0;
          padding: 10px;
          padding-bottom: 0;
          li{
               background-color: #ccc;
               list-style: none;
               margin-bottom: 10px;
               box-shadow: 0 0 5px black;
               image[lazy=loading] {
                width: 40px;
                height: 300px;
                margin: auto;
                }
              img{
                  width: 100%;
                  vertical-align: middle;
              }
          }
      }
  }


</style>
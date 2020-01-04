<template>
    <div class="newsinfo_container">
       
        <h3 class="title">{{newList[0].title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{newList[0].date}}</span>
            <span>点击:0次</span>
        </p>
        <hr/>
        <div  class="content" v-html="newList[0].content">
            
        </div>
        <!-- //父子组件之间传值 -->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
//导入评论组件
import  comment from '../subcompinents/comment.vue'
//获取url传递参数id:/home/:id(使用params来获取)
export default {
    data() {
        return {
            id:this.$route.params.id,
            newList:[
                {
                date:"2020-1-1",
                title:"这么快就2020年了，一点准备都没有",
                content:"真是个小机灵鬼。。。"
            }
            ],
            flag:true
        }
    },
    created() {
        this.getNewsinfo();
        // this.$forceUpdate();
    },

    methods: {
        getNewsinfo(){

           var list = JSON.parse(localStorage.getItem('news')||'[]');
         
        //    this.$set(this.newList,0,list);
           var newsInfo={
               date:list[0].date,
               title:list[0].title,
               content:list[0].content
           }
        //    this.$set(this.newList, 0, {});
           this.newList.unshift(newsInfo);
        //    this.$forceUpdate();

        //    console.log(this.newList);          
        }
    },
    components:{
        commentBox:comment
    },
    

    //computed监听数据
    computed: {
        myObj: {
            get: function(){
                this.flag=true;
                return this.newList; // 在这里把临时对象的值通过计算属性赋值给页面中用到的对象
            }
        },
    },
    
    

}
</script>


<style lang="scss">
// 注意点，<style lang="scss" scoped> scoped在这里影响了图片的布局
   .newsinfo_container{
       padding: 0 5px;
       .title{
           font-size: 16px;
           color: red;
           text-align: center;
           margin: 10px;
       }
       .subtitle{
           display: flex;
           justify-content: space-between;
       }
       .content{
           font-size: 13px;
               img{
                   width: 100%;
                }
               video{
                   width: 100%;
               }    
       }
      

       
       
   }
</style>
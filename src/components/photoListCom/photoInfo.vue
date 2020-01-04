<template>
    <div class="photo-info">
        <!-- 头部start -->
        <h3 class="title">这里是比基尼大美女</h3>
        <div class="subtitle">
            <span>发表时间:2020-1-2 23:19</span>
            <span>点击:0次</span>
        </div>
        <hr>
        <!-- 头部end -->
        <!-- 图片区域start -->
        <div class="imgbox">
            <vue-preview
                :list="list"
                :thumbImageStyle="{width: '80px', height: '80px', margin: '10px','box-shadow':'0 0 5px #000'}"
                :previewBoxStyle="{border: '1px solid #eee'}"
                :tapToClose="true"
                @close="closeHandler"
                @destroy="destroyHandler"
            />
         </div>
        <!-- 图片end -->
        <!-- 文字描述start -->
        <div class="des">
            村里有个姑娘叫小芳，人长得好看又善良，一双迷人的大眼睛，辫子粗又长。
            要回城的那个晚上，把她叫到小河旁，
        </div>
        <!-- 文字描述end -->
        <!-- 评论部分 -->
        <cmt-box :id="id"></cmt-box>

        
        
        
        
    </div>
</template>

<script>
import  comment from '../subcompinents/comment.vue'
import imgUrl from '../../imgSrc.json'
export default {
    data() {
        return {
            id:this.$route.params.id,
             
            list:[]
        }
    },
    created() {
        this.getImg();
    },
    methods: {
         closeHandler() {
              console.log('closeHandler')
            },
            // 完全关闭之后，调用这个函数清理资源
            destroyHandler() {
            console.log('destroyHandler');
            
            },
            getImg(){
                if(this.id%2==0){
                    this.list=imgUrl[0];
                }
                else{
                    this.list=imgUrl[1]
                }
            }
          
    },
 
    components:{
        cmtBox:comment,
    
    }
}
</script>


<style lang="scss" scoped>
   .photo-info{

       .title{
           color: aqua;
           text-align: center;
           font-size: 18px;
       }
       .subtitle{
           display: flex;
           justify-content: space-between;
           font-size: 15px;
           
       }
       .des{
           padding: 5px;
           margin-bottom:10px;
       }
     
       
       
   }
</style>
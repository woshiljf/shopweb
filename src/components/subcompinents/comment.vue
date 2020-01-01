<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr/>
        <textarea placeholder="请发表您的评论，不超过120字" maxlength="120" v-model:value="msg">
            
        </textarea>
        <mt-button type="primary" size="large" @click="postMsg">发表</mt-button>
         <div class="cmt-list">

              <div class="cmt-item" v-for="(item,i) in commentsList" :key="item.id">
                  <div class="cmt-title"><span>第{{i+1}}楼：{{item.name}}</span></div>
                  <div class="cmt-body">{{item.comment}}</div>
              </div>

             
         </div>
        
        <mt-button plain type="danger" size="large">加载更多</mt-button>

        
        
        
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            pageIndex:1,   //默认加载第一页的数据
            commentsList:[
                {id:1,name:"周杰伦",comment:"你说把爱渐渐放下会走更远，又何必去改变已走过的时间..."},
                {id:2,name:"张学友",comment:"任晚风轻轻吹走了晚霞，我已习惯每个傍晚去想她..."},
                {id:3,name:"刘德华",comment:"我是在等待，一个女孩，还是在等待沉沦苦海..."},
                {id:4,name:"陈奕迅",comment:"十年之前，我不认识你，你不属于我，我们还是一样，陪在一个陌生人左右..."},
            ],
            msg:''
        }
    },
    methods: {
        //用户评论的内容，可以使用this.$http.get请求，向服务器获取对应新闻id的用户评论数据,这里暂时没有，只能先用假数据代替
        //在这里，在有服务器的情况下，可以先把评论的数据发送服务器this.$http.post("地址",{body},{数据格式}).then()
        //这样再把评论的数据，使用数组的unshift把最新的评论数据渲染到页面.
       postMsg(){

            //判断msg是否为空,清除空格之后，长度为0,表示没有评论
            if(this.msg.trim().length===0){
                Toast("评论内容为空，请重新评论");
                return
            }
            
            var index=0;
            this.commentsList.forEach(item => {
               if(item.id>index){
                   index=item.id;
               }
               
            });
         
            //添加到数组
            this.commentsList.unshift({id:index+1,name:"匿名",comment:this.msg});           
        }
    },
    //props属性，数组中的id为父组件传递过来的参数（预先定义好)
    props:["id"]
}
</script>

<style lang="scss" scoped>
  .cmt-container{

      h3{
          font-size: 18px;
      }
      textarea{
          height: 100px;
          margin: 0;
      }
      .cmt-list{
          .cmt-item{
              margin-top: 5px;
              .cmt-title{
                   span{
                       font-size: 15px;
                        color: #FF6666;
                        // background-color: #FF6666;
                   }
              }
              .cmt-body{
                  font-size: 13px;
                  padding-left: 10px;
                  background-color: #FFFFCC;
              }
          }
      }
      
      
  }
</style>
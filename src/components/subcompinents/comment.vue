<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr/>
        <textarea name="" id="" cols="30" rows="10" placeholder="请发表您的评论，不超过120字" maxlength="120">
            
        </textarea>
        <mt-button type="primary" size="large">发表</mt-button>
         <div class="cmt-list">

              <div class="cmt-item">
                  <div class="cmt-title"><span>第一楼：周杰伦</span></div>
                  <div class="cmt-body">天青色等烟雨，而我在等你，炊烟袅袅升起，隔江千万里。。。</div>
              </div>

                <div class="cmt-item">
                  <div class="cmt-title"><span>第二楼：陈奕迅</span></div>
                  <div class="cmt-body">十年之前，我不认识你，你不属于我，我们还是一样，陪在一个陌生人左右</div>
              </div>

                <div class="cmt-item">
                  <div class="cmt-title"><span>第二楼：陈奕迅</span></div>
                  <div class="cmt-body">如果再见不能红着脸，是否还能红着眼。</div>
              </div>
             
             
         </div>
        
        
        
        
        <mt-button plain type="danger" size="large">加载更多</mt-button>

        
        
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            pageIndex:1   //默认加载第一页的数据
        }
    },
    methods: {
        //用户评论的内容，可以使用this.$http.get请求，向服务器获取对应新闻id的用户评论数据,这里暂时没有，只能先用假数据代替
        
        
        
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
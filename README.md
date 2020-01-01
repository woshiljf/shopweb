# 好好的学习编程，做一个不只是会粘贴复制的程序员。
## 坚持学习的动力，每一天都要保持积极的心态，即使遇上再大的挫折，也不要轻言放弃。
### 做到每天学习，每天学会总总结.
# 好好的学习，走向人生巅峰。
## 好好学习，天天向上
## 制作小图标
+ 拷贝css样式
+ 拷贝扩展字体库
+ 添加 mui-icon-extra mui-icon-extra-cart
## 改造tarbar为router-link
## 设置路由高亮
##　点击tabbar切换路由组建
## 加载轮播图数据
1. 使用vue-resource获取第三方服务器数据
2. 使用this.$http.(get,post,put...)
3. 获取数据存入data
4. 使用v-for 循环渲染到每个item
##　新闻咨询模块
1. 新的路由模块(newList),不是子路由，平级路由
2. vue-resource 获取数据，渲染newList 新闻模块，（暂时没有外部api，可以先用自己定义一个新闻List数据)
3. 注意点: 在根路径相同时,可以设置全局设置根路径: Vue.http.option.root='root'
4. 再有外部数据接口的情况下，使用this.$http.get().then()获取接口数据，并渲染至页面
## 实现新闻点击，跳转到新闻详情，
1. 列表中的标题拦改为router-link,页面跳转提供对应的id标识符
2. 创建新闻详情组件页面
3. 在router中添加路由
## 单独封装一个comment.vue评论组件
1. 创建comment组件模板
2. 在需要评论组件的组件页面，手动导入comment.vue组件 import comment from '路径'
3. 给父组件添加组件 components:{ commentBox}
## 实现加载更多
1. 为加载更多按钮添加点击事件，事件方法中，向服务器请求下一页的评论(默认一页是10条数据)
2. 点击加载更多，让pageIndex自增，重新向服务器发起第二次请求， 数据push到原数据之后（如果返回的是数组，concat拼接)
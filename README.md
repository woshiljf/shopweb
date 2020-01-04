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

## 完成发表评论的功能
1. 把文本框做双向数据bangd
2. 发表按钮绑定一个事件
3. 校验评论内容是否为空，为空，Toast弹框显示用户。
 + 评论成功，点击按钮，获取评论调用自定义方法，调用数组unshift方法，把最新的数据追加到data的comment的开头.

## 图片列表，组件，美化
1. 顶部滑动条mui里面寻找(或者自己制作),并取消全屏 mui-fullscreen这个类去掉（这里使用Mui)
2. 制作 底部的图片列表.
3. 滑动部分需要mui初始化
4. 严格模式下的错误处理
+ mui.js中可能用到了"caller","callee",and"arguments"(严格模式下不能使用),webpack 打包的bundle.js默认使用的严格模式，两种冲突.
+ 解决方式:把webpack的严格模式移除.
+ 方法:安装移除严格模式插件 npm install babel-plugin-transform-remove-strict-mode
+ .babelrc: {
    "plugins": ["transform-remove-strict-mode"]
    }
5. 解决页面加载无法滑动的问题:获取组件的dom元素应该在mounted里操作，否则无法获取dom元素
 + 解决tab无法切换的问题:这是因为mui.js里的类mui-tab-item和mint-ui冲突了，修改类名
### 值作图片列表区域
1. 图片列表使用懒加载技术,使用mint-ui提供现成的组件'lazy-load',
2. 根据懒加载的使用方法实现功能，渲染图片列表

### 图片详情中的缩略图，使用插件：vue-priview
### 绘制商品购买页面
### 测试手机上运行找，调试项目.
1. wds添加上运行的ip，--host 192.168.137.1
2. 电脑上开启wife,关闭所有的防火墙，手机才能连上。（电脑和手机必须处于同一局域网下才能连接)

### 使用编程式页面跳转的方法，实现页面导航
1. 之前一直使用标签式的跳转(router-link)来实现页面的导航
2. vue-router提供了页面跳转的方法(https://router.vuejs.org/zh/guide/essentials/navigation.html)
### 商品详情页面，使用卡片式的布局方式
1. 布局方法:可以自己写
2. 使用mui的card部分
### 在线购买页面的注意部分
1. 由于商品参数信息通过http请求获取的数据是异步的，无法直接的赋予购买数量的最大值，可能会是undefined。
2. 父组件像子组件传值通过数值绑定的方式，但是由于数据是异步请求的。可以在子组件使用watch事件，当监听到数据的变化，立即赋予购买数量的最大值即可。
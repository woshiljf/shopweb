const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin.js');
const webpack = require('webpack')

module.exports = {

    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'main.js'
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            mui: "mui",
            "window.mui": "mui"
        })
    ],
    //module:这个节点属性:用于配置第三方模块加载器
    module: {
        //rules:所有第三方模块的匹配规则,数组对象，存放所有第三方文件的匹配和处理规则
        rules: [
            // test:使用正则表达式来处理
            //对于css文件，使用我们的第三方宝style-loader,css-loader来处理
            //use:打包顺序，从后往前打包，层层处理
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            //传递参数limit=显示图片大小(byte单位),大于或者等于，图片则不会转为base-64的格式。[name]...标识图片显示名称，加上8为哈希值，避免重名。
            {
                test: /\.(jpg|png|gif|bmp|jpeg)$/,
                use: [{
                    loader: 'url-loader?limit=10000&name=[hash:8]-[name].[ext]',
                    options: { esModule: false }
                }]
            },
            { test: /\.(ttf|eot|svg|woff|woff2|otf)$/, use: 'url-loader' }, //处理字体文件
            { test: /\.vue$/, use: 'vue-loader' } //处理.vue文件

        ]

    },
    //设置vue
    resolve: {
        //修改vue被导入时包的路径,默认为rountetime.js
        alias: {
            'vue$': 'vue/dist/vue.js',
            'mui': path.join(__dirname, './src/lib/mui/js/mui.js')
        }
    },
    node: {
        fs: "empty"
    }




}
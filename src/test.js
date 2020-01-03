/** 
 * 目录操纵
 * 1 创建目录
 *fs.mkdir(path[, options], callback)
 * fs.mkdirSync(path[, options])
 * 
 * fs.readdir(path[, options], callback)
 * fs.readdirSync(path[, options])
 * 
 * fs.rmdir(path[, options], callback)
 * fs.rmdirSync(path[, options])
 */
const fs = require('fs');
const path = require('path');

//创建目录
// fs.mkdir(path.join(__dirname, 'new目录'), (err) => {
//     if (err) return;
//     console.log("创建成功");

// })

//删除墨镜

//读取目录
fs.readdir(path.join(__dirname, './images/zjl'), (err, files) => {
    if (err) return;
    console.log(files);
})
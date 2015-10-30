ionic项目脚手架.
=====================

## 开发环境搭建

1. 安装nodeJs.
2. 安装相关开发工具包：
```bash
$ npm i -g fis-zoo fis-postpackager-simple fis-parser-less fis-parser-sass ionic cordova
```
3. 创建项目：
```bash
$ ionic start youApp blank
$ cd youApp
$ git init   
$ git remote add origin git@github.com:you/youApp.git 
$ git pull origin master  
$ git reset --hard origin/master  
```

##浏览器开发运行
每次开发前于项目根目录命令行执行，用于监测文件变化，编译部署：
```bash
fis server start --port 3000 --root ./www & fis-zoo release --file fis-dev.js --dest local --watch
```

##设备或模拟器开发运行项目





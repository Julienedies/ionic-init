ionic项目脚手架.
=====================

## 开发环境搭建
使用[fis](http://fis.baidu.com/)做为项目构建工具.

1.安装nodeJs.

2.执行以下命令，安装相关开发工具包：

```
$ npm i -g fis-zoo fis-postpackager-simple fis-parser-less fis-parser-sass ionic cordova gulp bower
```

3.创建项目,执行以下命令：

```
$ ionic start app blank 
$ cd app 
$ npm install 
$ git init    
$ git remote add origin git@180.235.135.11:mobile/app.git 
$ git pull origin master   
$ git reset --hard origin/master   
```

## 浏览器开发测试
每次开发前于项目根目录执行以下命令，用于监测文件变化，编译部署：

```
$ fis server start --port 3000 --root ./www
$ fis-zoo release --file fis-dev.js --dest local --watch
```

或者执行以下命令:

```
$ fis-zoo release --file fis-dev.js --dest local --watch
$ ionic serve
```

## 设备或模拟器开发测试
项目根目录执行：

```
$ ionic platform add ios
$ ionic build ios
$ ionic run ions
```

详见[ionic官方文档](http://ionicframework.com/docs/guide/installation.html).




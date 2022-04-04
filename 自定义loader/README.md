# webpack template compilation - loader

## development process

### 1. git 初始化

```shell
git init // 创建.git文件夹
touch README.md // 创建README.md文件
```

### 2. npm 初始化

```shell
npm init -y  // 创建package.json
```

### 3. 安装 webpack 等依赖

```shell
npm install webpack webpack-cli webpack-dev-server html-webpack-plugin babel-loader @babel/core -D  // 生成node_modules文件夹(安装的依赖)和package-lock.json文件(安装信息)
```

### 4. 新建 webpack 配置文件并做基本配置

```shell
touch webpack.config.js // 新建webpack.config.js文件
mkdir src // 创建src文件夹
cd src // 进入src路径下
touch app.js // 在src路径下创建app.js文件
cd .. // 返回上一目录，这里也是目录
touch index.html // 创建index.html(根目录)
// 在index.html中创建基本html结构，并在<body>标签中添加标签<div id="app"></div>
// 其他文件夹以及文件的创建见代码目录
```

```js

```

## key point

### 1. vscode 打开 md

```js
ctrl + shift + v;
```

### 2. .tpl 文件

```js
// tpl文件是模板文件，很多模板引擎会见到这个类型文件
```

### 3. 参考

https://segmentfault.com/a/1190000039002273?utm_source=tag-newest

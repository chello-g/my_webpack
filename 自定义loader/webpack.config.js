/**
 * node development: production
 * entry 入口文件: 指示Webpack以哪个文件作为入口起点分析构建内部依赖图并进行打包。
 * output path filename 打包输出路径: 指示Webpack打包后的资源bundles输出到哪里去，以及如何命名。
 * devtool: source-map
 * module rules loader
 * plugins 插件
 * decServer 开发服务器
 */
const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: 'development',
  entry: resolve(__dirname, 'src/app.js'),
  output: {
    clean: true,
    path: resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  // devtool: 'source-map',
  // 加载项目的所有loader路径, loader 默认在node_modules中查找, 也可指定目录如loaders
  // 也可以直接npm install ./loaders/force-strict-loader -D直接安装到node_modules
  resolveLoader: {
    modules: ['node_modules', resolve(__dirname, 'loaders')]
  },
  devServer: {
    port: 3000
  },
  module: {
    // webpack的loader执行顺序是从下到上,从右到左,使用自己的loader,即tpl-loader,将tpl内容转为字符串，然后交给babel-loader，让babel-loader解析成JS程序，然后打到app.js中
    rules: [
      {
        test: /\.tpl$/, // 编译过程中，看到tpl结尾的文件，按照我们下面的配置就会先使用tpl-loader，然后使用babel-loader
        use: [
          'babel-loader', // 需要安装babel-loader相关插件 babel-loader,@babel/core html-webpack-plugin
          {
            loader: 'tpl-loader',
            options: {
              log: true // 自定义配置，是否需要开启日志
            }
          }
        ]
      },
      {
        test:/\.js$/,
        use:'force-strict-loader',
        exclude: /node_mosules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'index.html')
    })
  ]
}
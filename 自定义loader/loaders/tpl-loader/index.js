/*
 * @Author: your name
 * @Date: 2022-03-13 08:56:44
 * @LastEditTime: 2022-03-13 10:12:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \custom_loader\loaders\tpl-loader\index.js
 */

// getOptions得到loader配置项的use.options
const { getOptions } = require('loader-utils')
function tplReplace (template, replaceObject) {
  return template.replace(/\{\{(.*?)\}\}/g, (node, key) => {
    return replaceObject[key];
  })
}

function tplLoader (source) {
  source = source.replace(/\s+/g, '')
  console.log('***********************source***********************: ', source)
  const { log } = getOptions(this)
  const _log = log ? `console.log('compiled the file which is from ${this.resourcePath}')` : ''

  return `
    export default (options) => {
      ${tplReplace.toString()}
      ${_log}
      return tplReplace('${source}', options)
    }
  `

}

module.exports = tplLoader

/**
 * 要达成的效果：
 * tpl是我们自己写的一个模板，我需要把模板导入，
 * 然后我只需要传入相关的模板数据就能在页面中显示带数据的模板的html页面，
 * 所以关键就是解析我们的tpl文件，我们需要自定义一个loader
 */
/**
 * 思路：
 * 一个loader就是一个函数，默认接受一个参数source,是tpl内容，options是tpl的传参内容
 * tplLoader函数的主要功能是对字符串的操作，我们可以拿到tpl文件的内容（字符串source），
 * 将我们的option对应的value替换掉模板中的占位处，也就是`{{}}`包裹的地方，返回一个新的函数
 */
/**
 *  tplLoader最终返回的是一个字符串，这个字符串导出的是一个方法
 *  ${tplReplace.toString()}即把tplReplace这个函数当成字符串拼接进去
 *  source是tpl文件的内容
 *  \s+表示查找一个或一个以上的空白字符
 */
/**
 * option(replaceObject)
 * {
 *   name: '夏木forest',
 *   age: 20,
 *   career: '插画师',
 *   hobby: '画画'
 * }
 */
/**
 * template
 * <div><h1>{{name}}</h1><p>{{age}}</p><p>{{career}}</p><p>{{hobby}}</p></div>
 */
/**
 * source:
 * <div>
 *   <h1>{{ name }}</h1>
 *   <p>{{ age }}</p>
 *   <p>{{ career }}</p>
 *   <p>{{ hobby }}</p>
 * </div>
 */
// replace函数的高级用法
// let str = '<div><h1>{{name}}</h1><p>{{age}}</p><p>{{career}}</p><p>{{hobby}}</p></div>'
// 匹配{{}}模板内容:
// str.replace(/\{\{(.*?)\}\}/g, (node, key, index, target) => {
//    console.log(node, key, index, target);
// 结果:
//    {{name}} name 9 <div><h1>{{name}}</h1><p>{{age}}</p><p>{{career}}</p><p>{{hobby}}</p></div>
//    {{age}} age 25 <div><h1>{{name}}</h1><p>{{age}}</p><p>{{career}}</p><p>{{hobby}}</p></div>
//    {{career}} career 39 <div><h1>{{name}}</h1><p>{{age}}</p><p>{{career}}</p><p>{{hobby}}</p></div>
//    {{hobby}} hobby 56 <div><h1>{{name}}</h1><p>{{age}}</p><p>{{career}}</p><p>{{hobby}}</p></div>*/
// })


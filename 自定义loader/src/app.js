import tpl from './info.tpl'

const oApp = document.querySelector('#app')

const info = {
  name: '夏木forest1',
  age: 21,
  career: '插画师1',
  hobby: '画画1'
}

console.log('------------------------------tpl------------------------------:', tpl)

oApp.innerHTML = tpl(info)

// const info1 = 'aaa'  // 不用loader，就可在页面显示，不需要解析

// const info2 = '<div><h1>name</h1><p>age</p><p>career</p><p>hobby</p></div>' // 不用loader，就可在页面显示，不需要解析

// const inf3o = '<div><h1>{{ name }}</h1><p>{{ age }}</p><p>{{ career }}</p><p>{{ hobby }}</p></div>' // 不用loader，就可在页面显示，但是会把{{name}}等解析成字符串

// 没有loader，不能解析info, 页面会显示undefined，考虑info2的情形，有思路，就是把info转变成字符串
// tpl其实是个函数，我们loader返回的应该是个字符串，然后交给babel-loader处理，他会把字符串转换成js代码执行
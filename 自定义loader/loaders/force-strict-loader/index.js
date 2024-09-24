// 该loader的作用是让文件头部添加use strict前缀
const loaderUtils = require("loader-utils");
module.exports = function(content) {
    if(this.cacheable) {
        this.cacheable()
    }
    // 获取和打印options
    const options = loaderUtils.getOptions(this) || {};
    console.log('this==:', this, 'options==:', options)
    // 处理content
    var useStrictPrefix = '\'use strict1111\';\n\n';
    return useStrictPrefix + content;
}

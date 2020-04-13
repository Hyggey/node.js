console.log('a start')
require('./b.js')
console.log('a end')

// node中没有全局作用域，只有模块作用域
// 意思就是，a，b文件里的东西互不影响
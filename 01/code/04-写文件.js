var fs = require('fs')

fs.writeFile('./hello.md','我是node',function(error){
    console.log('文件写入成功')
    if(error){
        console.log(error)
    }
})
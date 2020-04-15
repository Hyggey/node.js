var express = require('express')

var app = express()

// 用express内置的公开公共资源的功能
app.use('/public/',express.static('./public/'))
app.get('/',function(req,res){
    res.send('hello express')
})

app.listen(3000,function(){
    console.log('服务已启动')
})

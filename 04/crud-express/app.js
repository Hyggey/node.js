var express = require('express')

var app = express()

app.engine('html', require('express-art-template'));

app.use('/node_modules/',express.static('./node_modules/'))
app.use('/public/',express.static('./public/'))

app.get('/',function(req,res){
    res.render('index.html',{
        title:[
            '苹果',
            "香蕉",
            "梨子",
            "西瓜"
        ]
    })
})

app.listen(3000,function(){
    console.log('express is running')
})
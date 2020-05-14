var express = require('express')

var app = express()
var fs = require('fs')

app.engine('html', require('express-art-template'));

app.use('/node_modules/',express.static('./node_modules/'))
app.use('/public/',express.static('./public/'))

app.get('/',function(req,res){
    fs.readFile('./db.json','utf8',function(err,data){
        if(err){
            return res.status(500).send('server err')
        }
        console.log(data)
        res.render('index.html',{
            title:[
                '苹果',
                "香蕉",
                "梨子",
                "西瓜"
            ],
            students: JSON.parse(data).students
    
        })
    })
})

app.listen(3000,function(){
    console.log('express is running')
})
var http = require('http')

var server = http.createServer()

server.on('request',function(req,res){
    if(req.url === '/a'){
        var products = [
            {
                title:'123',
                name:'到了'
            },
            {
                title:'2',
                name:'了'
            }
        ]
        res.end(JSON.stringify(products))
    }
})

server.listen(3000,function(){
    console.log('dasfdfdsf')
})
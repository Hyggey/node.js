var http = require('http')

var server = http.createServer()

server.on('request',function(req,res){
    console.log(req.url);
    res.write('hello')
    res.end()
    // 或者直接end('hello)
})

server.listen(3000)
var fs = require('fs')
fs.readFile('./README.md',function(error,data){
    console.log(data.toString())
})
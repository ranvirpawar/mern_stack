// var http = require('http')

// http.createServer(function(req, res){

//     res.write(200, { 'Content-Type' : 'text/html'})
//     res.write("Welcome Back Alien") 
//     res.end()
// }).listen(8080)
var objectname =  require('./add.js')

result1 = objectname.add(4,5)
result2 = objectname.sub(4,6)

console.log("The output is " + result1 + " " + result2)



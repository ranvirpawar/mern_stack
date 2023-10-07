 # Node

### How Web server Works

 in java the server can run upto 200 threads which is used to handle multiple requests and responses
 js does not have concept of threads
 1 Non Blocking I/O 2 Asynchronus
 node is used for i/o intensive work not useful for cpu intensive work.
 node js is single threaded but behind the scene the kernel is using multiple threads
 fast and flexible

### NPM

 Node has multiple inbuild modules ( http, FS(file system), cryptography )
 if you want to use someone else's module then we have concept of **_NPM_**

#### NPM node package manager

it has millions of packages ( 1 million above)
you can also push your module into NPM
NPM is part of GITHUB
eg mongodb, socket.io, express

##### modules

- modules are a way to organize and encapsulate code into reusable units
- to used module use --> `require ' '`
- module should be exported before i.e module.exports.name = name

## Creating A Server ##

```
var http = require('http') //importing 
http.createServer(function(req, res){
    res.write(200, { 'Content-Type' : 'text/html'})
    res.write('Welcome Back Alien')
    res.end()
}).listen(8080) //.listen(8080, 'ip address 174.0.0.2')
```

* `require` access the module 
* `createServer` is inbuilt function of http module to run server on ip address:portNumber
* `.listen()` is used to access port number


## Modules ##
> creating a module
```
function add(a,b ){
    return a+b
}

function sub(a,b){
    return a-b
}
```
> exporting a module 
```
module.exports.add = add
exports.sub = sub
// or 
exports.sub = function sub(a,b){
    return a-b
}
```
> Accessing a module
```
var objectname =  require('./operations.js')
result1 = objectname.add(4,5)
result2 = objectname.sub(4,6)

console.log("The output is " + result1 + " " + result2)
```
> Show current date and time
* creating a module `datetime.js`
```
 function getCurrentDateTime (){
    const currentDateTime = new Date();
    return currentDateTime.toISOString();
};
exports.getCurrentDateTime = getCurrentDateTime
```
* import it in `app.js`
```
const datetime = require('./datetime.js');

const ans = datetime.getCurrentDateTime();
console.log(ans + " is current date and time ")
```

## event handling module ##
>events 
```
const EventEmitter = require('events');

const event = new EventEmitter(); 
//const event = require('events');

event.on('sayMyName', () =>{
    console.log("your name is Ranvir")
});

event.emit('sayMyName');
```

* `.emit` is used to create your own event
* `.on ` what will when you start your event 
* callback fuction should be define earlier before firing them 








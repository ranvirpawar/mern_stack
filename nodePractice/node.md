# Node

### How Web server Works

> in java the server can run upto 200 threads which is used to handle multiple requests and responses
> js does not have concept of threads
> 1 Non Blocking I/O 2 Asynchronus
> node is used for i/o intensive work not useful for cpu intensive work
> node js is single threaded but behind the scene the kernel is using multiple threads
> fast and flexible

### NPM

> Node has multiple inbuild modules ( http, FS(file system), cryptography )
> if you want to use someone else's module then we have concept of **_NPM_**

#### NPM node package manager

it has millions of packages ( 1 million above)
you can also push your module into NPM
NPM is part of GITHUB
eg mongodb, socket.io, express

##### modules

- collection of diff packages
- to used module use --> require ' '
- module should be exported before i.e module.exports.name = name

## Creating A Server

```var http = require('http')

http.createServer(function(req, res){

    res.write(200, { 'Content-Type' : 'text/html'})
    res.write("Welcome Back Alien")
    res.end()
}).listen(8080)
```

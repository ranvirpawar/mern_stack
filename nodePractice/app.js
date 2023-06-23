// creating a server
const http = require('http');

http.createServer(function (_req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('Welcome Back Alien');
  res.end();
}).listen(8080);

// module creation and accessing them
var objectname =  require('./operations.js')

result1 = objectname.add(4,5)
result2 = objectname.sub(4,6)

console.log("The output is " + result1 + " " + result2)

// showing result on webpage
const http = require('http');
const objectname = require('./operations.js');

const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  const result1 = objectname.add(4, 67 );
  const result2 = objectname.sub(4, 6);

  const output = `The output is ${result1} ${result2}`;
  res.end(output);
}).listen(8080);

const port = 8080;
server.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});


/// Event handling using node js 

const EventEmitter = require('events');

const event = new EventEmitter(); 
// const event = require('events');

event.on('sayMyName', () =>{
    console.log("your name is Ranvir")
});

event.on('sayMyName', () =>{
    console.log("Gajanan")
});

event.on('sayMyName', () =>{
    console.log("Pawar")
});

event.emit('sayMyName');

// event to check status code
event.on("checkPage", (sc,msg) => {
    console.log(`your status code is  ${sc} and the page is ${msg}`);
});

event.emit('checkPage', 300, "ok");


// show date and time

const datetime = require('./datetime.js');

const ans = datetime.getCurrentDateTime();
console.log(ans + " is current date and time ")


 
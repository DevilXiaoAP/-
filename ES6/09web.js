// var http = require('http')

// var onRequest = function(request, response) {
//     console.log('Request received');
//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     // response.write('Hello from out application');
//     response.end('Hello from out application');
// }
// var server = http.createServer(onRequest);

// server.listen(3000, '127.0.0.1')
// console.log('Server started on localhost port 3000');



//响应json
// var http = require('http')

// var onRequest = function(request, response) {
//     console.log('Request received');
//     response.writeHead(200, { 'Content-Type': 'application/json' });
// }
// response.end(JSON.stringify(myObj));

// var server = http.createServer(onRequest);

// server.listen(3000, '127.0.0.1') //浏览器中输入localhost:3000
// console.log('Server started on localhost port 3000');




//响应html
// var http = require('http');
// var fs = require('fs');

// var onRequest = function(request, response) {
//     console.log('Request received');
//     response.writeHead(200, { 'Content-Type': "text/html;charset='utf-8'" });
//     var myReadStream = fs.createReadStream(__dirname + '/24promise.html', 'utf-8');
//     myReadStream.pipe(response)
// }

// var server = http.createServer(onRequest);

// server.listen(3000, '127.0.0.1') //浏览器中输入localhost:3000
// console.log('Server started on localhost port 3000');




//模块化
var http = require('http');
var fs = require('fs');

function startServer() {
    var onRequest = function(request, response) {
        console.log('Request received');
        response.writeHead(200, { 'Content-Type': "text/html;charset='utf-8'" });
        var myReadStream = fs.createReadStream(__dirname + '/24promise.html', 'utf-8');
        myReadStream.pipe(response)
    }

    var server = http.createServer(onRequest);

    server.listen(3000, '127.0.0.1') //浏览器中输入localhost:3000
    console.log('Server started on localhost port 3000');
}

exports.startServer = startServer;
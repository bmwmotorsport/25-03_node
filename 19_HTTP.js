// HTTP Module

var http = require('http');
//create a server object:
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(3120); //Server listening on port

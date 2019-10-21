var http = require('http');
var fs = require('fs');


// create a server and getting the respond to write it to the server port 3000
var server = http.createServer(function(req, res) {
    console.log('request was made:' + req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});
    var myObj = {
        name: 'Ryu',
        job: 'Ninja',
        age: 100
    }
    res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('you are now listening to port 3000');
var http = require('http');
var fs = require('fs');


// create a server and getting the respond to write it to the server port 3000
var server = http.createServer(function(req, res) {
    console.log('request was made:' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
    
    // more efficient than stream because pipe is automatically writing instead of listening to the data
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('you are now listening to port 3000');
var http = require('http');
var fs = require('fs');


// create a server and getting the respond to write it to the server port 3000
var server = http.createServer(function(req, res) {
    console.log('request was made:' + req.url);
    if(req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/appBasicRouting.html').pipe(res)
    } else if(req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/appBasicRoutingContact.html').pipe(res)
    } else if (req.url === '/api/ninjas') {
        var ninjas = [{name: 'ryu', age: 100}, {name: 'yoshi', age: 12}];
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(ninjas))
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);

    }
});

server.listen(3000, '127.0.0.1');
console.log('you are now listening to port 3000');
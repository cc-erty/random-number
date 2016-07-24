var http = require('http');

var port = 8001;

function handleRequest(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.write("" + (Math.floor(Math.random() * 10) + 1));
	res.end();
}

var server = http.createServer(handleRequest);

server.listen(port);

console.log("Server started on port " + port);



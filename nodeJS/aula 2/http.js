

var http = require('http');

var server = http.createServer(function (request, response) {
	response.writeHead(200, {"Content-type": "text/html"});
	response.write("<h1>Be Mean</h1>");
	response.end();
}).listen(3000, function(){
	console.log('Servidor rodando em localhost:3000');
});
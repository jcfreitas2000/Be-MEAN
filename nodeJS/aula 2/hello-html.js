

var http = require('http'),
	fs = require('fs'),
	index = fs.readFileSync('index.html');

var server = http.createServer(function (request, response) {
	response.writeHead(200, {"Content-type": "text/html"});
	response.end(index);
}).listen(3000, function(){
	console.log('Servidor rodando em localhost:3000');
});
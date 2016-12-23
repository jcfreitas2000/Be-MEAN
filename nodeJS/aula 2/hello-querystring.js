//file hello-querystring.js
'use strict';

var date = (new Date()).toJSON();

const http = require('http'),
	url = require('url');

http.createServer(function (request, response) {
	var result = url.parse(request.url, true);

	response.writeHead(200, {'Content-type': 'text/html'});
	response.write('<html><body>');
	response.write('<h1>Query string</h1>');

	response.write('<ul>');

	console.log(result.query);
	for(var key in result.query){
		response.write('<li>' + key + ':' + result.query[key] + '</li>');
	}

	response.write('</ul>');
	response.write('</body></html>');
	
	response.end();
}).listen(3000, function(){
	console.log('Servidor rodando em localhost:3000');
});
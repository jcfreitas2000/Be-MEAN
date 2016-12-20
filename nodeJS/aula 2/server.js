//server.js
'use strict';


const http = require('http'),
	JSON = {
		version: 1.0,
		name: 'Be MEAN',
		created_at: Date.now()
	};

var server = http.createServer(function (request, response) {
	response.writeHead(200, {"Content-type": "application/json"});
	response.end();
}).listen(3000, function(){
	console.log('Servidor rodando em localhost:3000');
});
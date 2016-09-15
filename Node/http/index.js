var http = require('http');

var server = http.createServer(function(req, res) {
	res.end('Hola mundo con servidor http en node');
});

server.listen(3002, function(){
	console.log('El servidor esta listo escuchando en ' + this.address().port);
});
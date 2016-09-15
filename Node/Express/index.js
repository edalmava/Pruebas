/* npm init */
/* npm install --save express */
/* node index.js */

var express = require('express');

var app = express();

app.listen(3001, function(){
	console.log('Servidor escuchando en localhost:3001');
});

app.get('/', function(req, res){
	res.send('¡Hola Mundo!');
});

app.get('/acerca', function(req, res){
	res.send('Edwin Martinez(edalmava)');
});

app.get('/bienvenido/:nombre', function(req, res){
	res.send('Bienvenido ' + req.params.nombre);
});
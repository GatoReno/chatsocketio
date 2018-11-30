var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 6677;

app.use(express.static('client'));

app.get('/',function(req,res){
  res.status(200).send(' :3 todo bien');
});

app.get('/server',function(req,res){
  res.status(200).send(' :3 todo bien');
});

var mensajes = [{
  id: 1,
  msn: 'texto',
  nickname : 'kyo'
}];

io.on('connection',function(socket){
  console.log('usuario conectado - nodo - '+socket.handshake.address+'');
  socket.emit('mensajes', mensajes);
});

server.listen(port), function(){
  console.log('servidor arriba '+port);
};
//

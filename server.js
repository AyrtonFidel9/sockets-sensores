const { Server } = require("socket.io");

var express = require("express");
const path = require('path');
var app = express();

var http = require("http");
var server = http.createServer(app);

var io = new Server(server);

app.use(express.static(path.join(__dirname, 'src')));

/*app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});*/


io.on('connection', (socket)=>{
    console.log("un usuario se a conectado");
    socket.on('disconnect', () => {
        console.log('un usuario se a desconectado');
      });

    socket.on('mensaje', (msg)=>{
        console.log("¿Prender camara? "+msg);
        //io.broadcast.emit('mensaje', msg);
        socket.broadcast.emit(msg);
    });

})

server.listen(3000, ()=>{
    console.log('listen on *:3000');
});


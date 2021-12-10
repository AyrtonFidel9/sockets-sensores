var socket = io();

var sensor = document.getElementById("sensor");
const video = document.getElementById('video');

const canvas = document.getElementById('canvas');

sensor.addEventListener("click", function(event){
    
    socket.emit('mensaje',true);
});

  
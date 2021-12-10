var socket = io();

var sensor = document.getElementById("sensor");
const video = document.getElementById('video');

const canvas = document.getElementById('canvas');

sensor.addEventListener("click", function(event){
    
    socket.emit('mensaje',true);
   /* navigator.getUserMedia( 
        {video: true, audio: true }, 
        stream => { 
          const localVideo = document.getElementById("video");   
        if (localVideo) {     
         localVideo.srcObject = stream;   
        } 
       }, 
        error => {     
         console.warn(error.message); 
        }
       );*/
});
  
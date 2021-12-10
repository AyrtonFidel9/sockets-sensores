var socket = io();
var sensor = document.getElementById("parar");

socket.on('mensaje', function(msg) {
    alert("entro dd")
    if(msg)
    {
        alert("entro")
        navigator.getUserMedia( 
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
        );
    }
});
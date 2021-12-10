var socket = io();
var sensor = document.getElementById("parar");

socket.on('mensaje', function(msg) {
    if(msg)
    {
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


sensor.addEventListener("click",(event)=>{
    const localVideo = document.getElementById("video"); 
    localVideo.pause();
});




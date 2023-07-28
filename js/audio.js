
function toggleMusica() {
    var audioElement = document.getElementById("audio");
    var botonMusica = document.querySelector(".styled-button");
  
  
    if (audioElement.paused) {
      audioElement.play();
      botonMusica.textContent = "Stop"; 
    } else {
      audioElement.pause();
      botonMusica.textContent = "Start"; 
    }
  }
  

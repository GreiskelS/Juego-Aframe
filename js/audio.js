// Declarar la función toggleMusica en el ámbito global
function toggleMusica() {
  var audioElement = document.getElementById("audio");
  var botonMusica = document.querySelector(".styled-button");

  // Resto del código de la función toggleMusica
  if (audioElement.paused) {
    audioElement.play();
    botonMusica.textContent = "Stop"; // Cambiar el texto del botón a "Stop" cuando se inicia la reproducción
  } else {
    audioElement.pause();
    botonMusica.textContent = "Start"; // Cambiar el texto del botón a "Start" cuando se detiene la reproducción
  }
}

// Esperar a que se cargue completamente el DOM antes de realizar otras operaciones
document.addEventListener("DOMContentLoaded", function () {
  // Llamar a la función toggleMusica aquí si es necesario al cargar la página
});

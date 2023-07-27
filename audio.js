// Script para controlar la reproducción de la narración
document.addEventListener('DOMContentLoaded', function() {
  // Obtener referencia al elemento de la narración
  const narrationSound = document.getElementById('narrationSound');

  // Función para reproducir la narración dos veces
  function playNarration() {
    narrationSound.pause(); // Pausar la narración si ya se está reproduciendo
    narrationSound.currentTime = 0; // Reiniciar la narración al inicio
    narrationSound.play(); // Reproducir la narración
    setTimeout(function() {
      narrationSound.pause(); // Pausar la narración después de la primera reproducción
      narrationSound.currentTime = 0; // Reiniciar la narración al inicio
      narrationSound.play(); // Reproducir la narración por segunda vez
    }, narrationSound.duration + 500); // Esperar el tiempo de la narración más un pequeño margen de 500ms
  }

  // Reproducir la narración dos veces al cargar la página
  playNarration();
});
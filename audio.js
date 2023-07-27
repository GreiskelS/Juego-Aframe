
document.querySelector("a-scene").addEventListener("loaded", () => {
    const backgroundSoundElement = document.querySelector("#backgroundSound");
    const soundElement = document.querySelector("#sound");

    // Reproducir el sonido de fondo con un volumen más bajo y en bucle infinito
    backgroundSoundElement.volume = 0.5; // Ajusta el volumen del sonido de fondo según sea necesario
    backgroundSoundElement.loop = true;
    backgroundSoundElement.play();

    // Intentar reproducir la narración
    soundElement.volume = 1; // Ajusta el volumen de la narración según sea necesario
    soundElement.play()
      .catch((error) => {
        // Manejar el error en caso de que la reproducción automática esté bloqueada por el navegador
        console.log("Error al reproducir la narración:", error);
      });
  });
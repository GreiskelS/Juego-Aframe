 
AFRAME.registerComponent('self-remove', {
  schema: {
    timeout: { type: 'number', default: 2000 },
  },
  init: function () {
    var sceneEl = document.querySelector("a-scene");
    var element = this.el;
    setTimeout(function () {
      sceneEl.removeChild(element);
    }, this.data.timeout);
  }
});

AFRAME.registerComponent('generator', {
  init: function () {
    var sceneEl = this.el;

    var glbModelURL = 'https://cdn.glitch.global/ebd0de65-7a0c-4c3d-a550-d214da511d08/Turret%20Teleporter.glb?v=1690187026653';

    function createAndAnimateObject() {
      var obj = document.createElement('a-entity');
      var xpos = 2 * Math.random() - 1;

      obj.setAttribute('position', { x: xpos, y: 2.3, z: -10 });

      obj.setAttribute('animation', { property: 'position', to: { x: xpos, y: 1, z: 2 }, dur: 5000 });
      obj.setAttribute('self-remove', { timeout: 5000 });

      obj.setAttribute('gltf-model', glbModelURL);

      sceneEl.appendChild(obj);

      obj.addEventListener('animationcomplete', function () {
        // Cuando termina la animación, eliminamos el objeto actual
        sceneEl.removeChild(obj);
      });
    }

    // Generar un objeto inmediatamente al inicio
    createAndAnimateObject();

    // Generar objetos de uno en uno cada 8000ms (tiempo total de la animación anterior más el tiempo de espera)
    setInterval(function () {
      createAndAnimateObject();
    }, 1000);
  }
});
 
// const sound = document.getElementById('#soundnarracion');
// // sonido = document.getElementById('a-scene')
// sonido.setAttribute(sound,'"src: #soundnarracion; on: click"');

window.addEventListener('DOMContentLoaded', () => {
  const soundnarracion = document.getElementById('#soundnarracion');
  soundnarracion.play();
});

// window.addEventListener('DOMContentLoaded', () => {
//   const sound = document.getElementById('#soundnarracion');

//   // Agregar un controlador de eventos "ended" al elemento de audio
//   sound.addEventListener('ended', () => {
//       // Detener el sonido y reiniciar el tiempo de reproducción al finalizar
//       sound.pause();
//       sound.currentTime = 0; // Reiniciar el tiempo de reproducción al principio
//   });
// });
  
// window.addEventListener('DOMContentLoaded', () => {
//   const soundnarracion = document.getElementById('soundnarracion', click);
//   soundnarracion.play();
  
// });
  
  

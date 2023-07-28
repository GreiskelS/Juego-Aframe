


window.addEventListener('load', initScene, sound="src: #escena; autoplay")

const meteors  = [
  { x: 0, y: 0, z: -60 },
  { x: 0, y: 0, z: 60 },
  { x: 20, y: 0, z: 0 },
  { x: -20, y: 0, z: 0 },
  { x: 10, y: 0, z: 40 },
  { x: 10, y: 0, z: -40 },
  { x: -10, y: 0, z: -40 },
  { x: -10, y: 0, z: 40 }
]

let meteor, score = 0


window.addEventListener('load', initScene)

//funcion de disparar nave
AFRAME.registerComponent('shootable', {
    init: function () {
        this.el.addEventListener('click', () => {
            // Increment the score
            score++;
            document.querySelector('[text]').setAttribute('value', `${score} naves eliminadas`);

            // Remove the meteor from the scene
            this.el.parentNode.removeChild(this.el);

            // Store the updated score in LocalStorage
            localStorage.setItem('score', score);
        });
    },
});

//funcion de guardarlo en el localhost
window.addEventListener('load', () => {
    const savedScore = localStorage.getItem('score');
    if (savedScore !== null) {
        score = parseInt(savedScore);
        document.querySelector('[text]').setAttribute('value', `${score} naves eliminadas`);
    }

    initScene();
});


//funcion para que los objetos sean las naves
function initScene() {
    let orbits = document.querySelectorAll('.orbit')
  
    orbits.forEach(orbit => {
  
      meteors.forEach(pos => {
  
        meteor = document.createElement('a-entity')
        meteor.setAttribute('gltf-model', 'https://cdn.glitch.global/ebd0de65-7a0c-4c3d-a550-d214da511d08/Turret%20Teleporter.glb?v=1690187026653') 
        meteor.setAttribute('material', { color: '#00FF00', antialias: 'true', sound:"src: #sound; on: click" }) 
        meteor.setAttribute('class', 'meteor')
        meteor.object3D.position.set(pos.x, pos.y, pos.z)

        meteor.setAttribute('scale', '9 9 9');
  
        meteor.setAttribute('shootable', '')
  
        orbit.appendChild(meteor)
      })
    })
  }

  AFRAME.registerComponent('activar-raycaster-izquierdo', {
    init: function () {
      this.el.addEventListener('buttondown', (event) => {
        if (event.detail.id === 1) { // El ID 1 corresponde al botón A en el controlador izquierdo
          this.el.setAttribute('raycaster', 'enabled', true);
          this.el.setAttribute('collider-check', 'enabled', true);
        }
      });
      this.el.addEventListener('buttonup', (event) => {
        if (event.detail.id === 1) {
          this.el.setAttribute('raycaster', 'enabled', false);
          this.el.setAttribute('collider-check', 'enabled', false);
        }
      });
    }
  });
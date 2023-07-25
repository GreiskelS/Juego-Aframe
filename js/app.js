
window.addEventListener('load', initScene)

const meteors = [
    { x: 0, y: 0, z: -30 },
    { x: 0, y: 0, z: 30 },
    { x: 30, y: 0, z: 0 },
    { x: -30, y: 0, z: 0 },
    { x: 20, y: 0, z: 20 },
    { x: 20, y: 0, z: -20 },
    { x: -20, y: 0, z: -20 },
    { x: -20, y: 0, z: 20 }
]

let meteor, score = 0

function initScene() {

    let orbits = document.querySelectorAll('.orbit')

    orbits.forEach(orbit => {

        meteors.forEach(pos => {

            meteor = document.createElement('a-entity')
            meteor.setAttribute('geometry', { primitive: 'sphere', radius: Math.random() * 3 + 0.5 })
            meteor.setAttribute('material', { shader: 'flat', src: '#meteor' })
            meteor.setAttribute('class', 'meteor')
            meteor.object3D.position.set(pos.x, pos.y, pos.z)

            meteor.setAttribute('shootable', '')

            orbit.appendChild(meteor)
        })
    })
}

window.addEventListener('load', initScene)

//funcion de disparar nave
AFRAME.registerComponent('shootable', {
    init: function () {
        this.el.addEventListener('click', () => {
            // Increment the score
            score++;
            document.querySelector('[text]').setAttribute('value', `${score} meteoritos cazados`);

            // Remove the meteor from the scene
            this.el.parentNode.removeChild(this.el);

            // Store the updated score in LocalStorage
            localStorage.setItem('score', score);
        });
    },
});

// guardarlo en el local storage
window.addEventListener('load', () => {
    const savedScore = localStorage.getItem('score');
    if (savedScore !== null) {
        score = parseInt(savedScore);
        document.querySelector('[text]').setAttribute('value', `${score} meteoritos cazados`);
    }

    initScene();
});


// meter el objeto del nave
function initScene() {
    let orbits = document.querySelectorAll('.orbit')
  
    orbits.forEach(orbit => {
  
      meteors.forEach(pos => {
  
        meteor = document.createElement('a-entity')
        meteor.setAttribute('gltf-model', 'https://cdn.glitch.global/ebd0de65-7a0c-4c3d-a550-d214da511d08/Turret%20Teleporter.glb?v=1690187026653') // Aquí usamos el glTF previamente cargado
        meteor.setAttribute('material', { color: '#00FF00' }) // Puedes configurar el material como desees
        meteor.setAttribute('class', 'meteor')
        meteor.object3D.position.set(pos.x, pos.y, pos.z)

        meteor.setAttribute('scale', '4 4 4');
  
        meteor.setAttribute('shootable', '')
  
        orbit.appendChild(meteor)
      })
    })
  }
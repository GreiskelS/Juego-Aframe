

window.addEventListener('load', initScene)

const naves = [
    { x: 0, y: 0, z: -60 },
    { x: 0, y: 0, z: 60 },
    { x: 20, y: 0, z: 0 },
    { x: -20, y: 0, z: 0 },
    { x: 10, y: 0, z: 40 },
    { x: 10, y: 0, z: -40 },
    { x: -10, y: 0, z: -40 },
    { x: -10, y: 0, z: 40 }
]

let navee, score = 0

// function initScene() {

//     let orbits = document.querySelectorAll('.orbit')

//     orbits.forEach(orbit => {

//         naves.forEach(pos => {

//             navee = document.createElement('a-entity light="type: directional; color: #FFF; intensity: 0.6" sound: "on click"')
//             // navee.setAttribute('geometry', { primitive: 'sphere', radius: Math.random() * 3 + 0.5 })
//             navee.setAttribute('gltf-model', 'https://cdn.glitch.global/ebd0de65-7a0c-4c3d-a550-d214da511d08/Turret%20Teleporter.glb?v=1690187026653'), 

//             // navee.setAttribute('material', { shader: 'flat', src: '#navee' })
//             navee.setAttribute('class', 'navee')
//             navee.object3D.position.set(pos.x, pos.y, pos.z)

//             navee.setAttribute('material', { color: 'white', Roboto: 'monospace', src: '#navee' }) // Puedes configurar el material como desees

//             navee.setAttribute('shootable', '')

//             orbit.appendChild(navee)
//         })
//     })
// }

AFRAME.registerComponent('shootable', {
    init: function () {
        this.el.addEventListener('click', () => {
            this.el.parentNode.removeChild(this.el)
            document.querySelector('[text]').setAttribute('value', `${++score} naves eliminadas`)
        })
    }
})


function initScene() {
    let orbits = document.querySelectorAll('.orbit')
  
    orbits.forEach(orbit => {
  
      naves.forEach(pos => {
  
        meteor = document.createElement('a-entity' )
        meteor.setAttribute('gltf-model', 'https://cdn.glitch.global/ebd0de65-7a0c-4c3d-a550-d214da511d08/Turret%20Teleporter.glb?v=1690187026653', 
        ) // Aquí usamos el glTF previamente cargado
        meteor.setAttribute('material', { color: 'white', Roboto: 'monospace'}) // Puedes configurar el material como desees
        meteor.setAttribute('class', 'meteor')
        meteor.object3D.position.set(pos.x, pos.y, pos.z)

        meteor.setAttribute('scale', '9 9 9 ' );
        meteor.setAttribute('shootable', '')
  
        orbit.appendChild(meteor)
      })
    })
  }


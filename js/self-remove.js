// self-remove.js
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
  
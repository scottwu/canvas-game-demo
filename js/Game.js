var Game = {
  init: function(object) {
    this.object = object;
  },

  start: function start() {
    this.loop();
  },

  loop: function loop() {
    this.update();
    this.render();
    window.requestAnimationFrame(loop.bind(this));
  },

  update: function update() {
    this.object.update();
  },

  render: function render() {
    this.object.render();
  }
};
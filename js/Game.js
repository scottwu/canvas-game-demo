var Game = {
  init: function(canvas) {
    this.canvas = canvas;
    this.objects = [];
  },

  addObject: function(object) {
    this.objects.push(object);
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
    this.objects.forEach(object => object.update());
  },

  render: function render() {
    this.canvas.getContext('2d').clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.objects.forEach(object => object.render());
  }
};
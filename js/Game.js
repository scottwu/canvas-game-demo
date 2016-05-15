var Game = {
  init: function(canvas) {
    this.canvas = canvas;
    this.objects = [];
    this.states = {};
  },

  addObject: function(object, config) {
    var newObj = Object.create(object).init(config);
    this.objects.push(newObj);
    return newObj;
  },

  start: function start() {
    this.addKeyboardListeners();
    this.loop();
  },

  loop: function loop() {
    this.update();
    this.render();
    if (!this.states.hit) {
      window.requestAnimationFrame(loop.bind(this));
    } else {
      clearInterval(this.states.enemyInterval);
    }
  },

  update: function update() {
    this.objects = this.objects.filter(object => object.active);
    this.objects.forEach(object => object.update(this.states));
  },

  render: function render() {
    this.canvas.getContext('2d').clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.objects.forEach(object => object.render());
  },

  addKeyboardListeners: function addKeyboardListeners() {
    document.addEventListener('keydown', evt => {
      switch (evt.keyCode) {
        case 37: // left
          this.states.left = true;
          break;
        case 38: // up
          this.states.up = true;
          break;
        case 39: // right
          this.states.right = true;
          break;
        case 40: // down
          this.states.down = true;
          break;
      }
    });
    document.addEventListener('keyup', evt => {
      switch (evt.keyCode) {
        case 37: // left
          this.states.left = false;
          break;
        case 38: // up
          this.states.up = false;
          break;
        case 39: // right
          this.states.right = false;
          break;
        case 40: // down
          this.states.down = false;
          break;
      }
    });
  }
};
var Game = {
  init: function(canvas) {
    this.canvas = canvas;
    this.objects = [];
    this.states = {};
    this.listeners = {};
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
    if (!this.states.end) {
      window.requestAnimationFrame(loop.bind(this));
    } else {
      clearInterval(this.states.enemyInterval);
    }
    if (this.states.hit) {
      this.removeKeyboardListeners();
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
    var keyboardListener = (pressed, evt) => {
      switch (evt.keyCode) {
        case 37: // left
          this.states.left = pressed;
          break;
        case 38: // up
          this.states.up = pressed;
          break;
        case 39: // right
          this.states.right = pressed;
          break;
        case 40: // down
          this.states.down = pressed;
          break;
      }
    };
    this.listeners.keydownListener = keyboardListener.bind(this, true);
    this.listeners.keyupListener = keyboardListener.bind(this, false);
    document.addEventListener('keydown', this.listeners.keydownListener);
    document.addEventListener('keyup', this.listeners.keyupListener);
  },

  removeKeyboardListeners: function removeKeyboardListeners() {
    this.states.left = this.states.up = this.states.right = this.states.down = false;
    document.removeEventListener('keydown', this.listeners.keydownListener);
    document.removeEventListener('keyup', this.listeners.keyupListener);
  }
};

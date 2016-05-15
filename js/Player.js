var Player = {
  init: function init(config) {
    this.canvas = config.canvas;
    this.image = config.image;
    this.x = config.x;
    this.y = config.y;
    this.width = config.width;
    this.height = config.height;
    this.speed = config.speed;
    return this;
  },

  update: function update(states) {
    if (states.left && this.x > 0) this.x -= this.speed;
    if (states.up && this.y > 0) this.y -= this.speed;
    if (states.right && this.x < +this.canvas.width - this.width) this.x += this.speed;
    if (states.down && this.y < +this.canvas.height - this.height) this.y += this.speed;
  },

  render: function render() {
    this.canvas.getContext('2d')
      .drawImage(this.image, this.x, this.y, this.width, this.height);
  }
};
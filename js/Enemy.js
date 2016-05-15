var Enemy = {
  init: function init(config) {
    this.canvas = config.canvas;
    this.image = config.image;
    this.x = config.x;
    this.y = config.y;
    this.width = config.width;
    this.height = config.height;
    this.dx = config.dx * config.speed;
    this.dy = config.dy * config.speed;
  },

  update: function update() {
    this.x += this.dx;
    this.y += this.dy;
  },

  render: function render() {
    this.canvas.getContext('2d')
      .drawImage(this.image, this.x, this.y, this.width, this.height);
  }
};
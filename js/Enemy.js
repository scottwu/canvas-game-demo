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
    this.active = true;
    this.player = config.player;
    return this;
  },

  update: function update(states) {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x < -this.width ||
        this.x > +this.canvas.width + this.width ||
        this.y < -this.height ||
        this.y > +this.canvas.height + this.height) {
      this.active = false;
    }
    if (this.collides(this, this.player)) {
      this.player.hit = true;
    }
  },

  collides: function(a, b) {
    return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
  },

  render: function render() {
    this.canvas.getContext('2d')
      .drawImage(this.image, this.x, this.y, this.width, this.height);
  }
};
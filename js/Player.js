var Player = {
  init: function init(config) {
    this.canvas = config.canvas;
    this.image = config.image;
    this.sprite = config.sprite;
    this.x = config.x;
    this.y = config.y;
    this.width = config.width;
    this.height = config.height;
    this.speed = config.speed;
    this.active = true;
    this.hit = false;
    this.frame = 0;
    return this;
  },

  update: function update(states) {
    if (states.left && this.x > 0) this.x -= this.speed;
    if (states.up && this.y > 0) this.y -= this.speed;
    if (states.right && this.x < +this.canvas.width - this.width) this.x += this.speed;
    if (states.down && this.y < +this.canvas.height - this.height) this.y += this.speed;
    if (this.hit) {
      this.frame += 1;
      if (this.frame >= 44) {
        states.end = true;
      }
    }
  },

  render: function render() {
    if (this.hit) {
      this.canvas.getContext('2d')
        .drawImage(this.sprite, this.frame * 113, 0, 113, 106, this.x, this.y, this.width, this.height)
    } else {
      this.canvas.getContext('2d')
        .drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  }
};
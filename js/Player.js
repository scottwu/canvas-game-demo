var Player = {
  init: function init(config) {
    this.canvas = config.canvas;
    this.image = config.image;
    this.x = config.x;
    this.y = config.y;
    this.width = config.width;
    this.height = config.height;
  },

  render: function render() {
    this.canvas.getContext('2d')
      .drawImage(this.image, this.x, this.y, this.width, this.height);
  }
};
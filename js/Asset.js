var Asset = {
  load: function load(config) {
    var image = new Image();
    image.src = config.src;
    return image;
  }
};

var Canvas = {
  init: function init(config, target) {
    var canvas = document.createElement('canvas');
    canvas.width = config.width;
    canvas.height = config.height;
    canvas.id = config.id;
    canvas.style.position = "absolute";
    canvas.style.background = config.background;
    target.appendChild(canvas);
    return canvas;
  }
};

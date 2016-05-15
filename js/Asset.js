var Asset = {
  load: function load(config) {
    return new Promise(function(resolve, reject) {
      var image = new Image();
      image.onload = function() {
        resolve(image);
      };
      image.onerror = function(err) {
        reject(new Error('Asset loading failed'));
      };
      image.src = config.src;
    });
  }
};

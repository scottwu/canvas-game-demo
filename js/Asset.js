var Asset = {
  init: function init(config) {
    if (config.length) {
      var assetsPromise = config.map(function(asset) {
        return this.load(asset);
      }.bind(this));
      return Promise.all(assetsPromise);
    } else {
      return this.load(config);
    }
  },

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

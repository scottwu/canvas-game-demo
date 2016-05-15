var Asset = {
  init: function init(config) {
    if (config.length) {
      var assetsPromise = config.map(asset => {
        return this.load(asset);
      });
      return Promise.all(assetsPromise);
    } else {
      return this.load(config);
    }
  },

  load: function load(config) {
    return new Promise((resolve, reject) => {
      var image = new Image();
      image.onload = () => {
        resolve(image);
      };
      image.onerror = err => {
        reject(new Error('Asset loading failed'));
      };
      image.src = config.src;
    });
  }
};

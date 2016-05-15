var bgCanvas = Object.create(Canvas).init({
  id: 'background',
  width: 600,
  height: 600,
  background: '#111'
}, document.body);

var gameCanvas = Object.create(Canvas).init({
  id: 'game',
  width: 600,
  height: 600,
}, document.body);

var assets = Object.create(Asset).init([
  { src: 'assets/spaceship.png' },
  { src: 'assets/astroid.png' }
]);

assets.then(function(image) {
  gameCanvas.getContext('2d').drawImage(image, 0, 0);
});

assets.then(function(images) {
  var spaceship = images[0];
  var astroid = images[1];
  gameCanvas.getContext('2d').drawImage(spaceship, 0, 0);
  gameCanvas.getContext('2d').drawImage(astroid, 300, 0);
});

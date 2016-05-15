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
  { src: 'assets/spaceship.pn' },
  { src: 'assets/astroid.png' }
]);

assets.then(images => {
  var player = Object.create(Player);
  player.init({
    canvas: gameCanvas,
    image: images[0],
    x: 100,
    y: 100,
    width: 80,
    height: 100
  });
  player.render();
}).catch(err => {
  console.log(err);
});

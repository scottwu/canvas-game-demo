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

var game = Object.create(Game);
game.init(gameCanvas);

assets.then(images => {
  game.addObject(Player, {
    canvas: gameCanvas,
    image: images[0],
    x: 100,
    y: 100,
    width: 80,
    height: 100,
    speed: 5
  });

  game.addObject(Enemy, {
    canvas: gameCanvas,
    image: images[1],
    x: -50,
    y: 300,
    width: 50,
    height: 50,
    speed: 3,
    dx: 1,
    dy: -0.5
  });

  game.start();
}).catch(err => {
  console.log(err);
});

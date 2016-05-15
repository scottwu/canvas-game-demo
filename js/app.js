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

var enemyFactory = function enemyFactory(config) {
  var params = {}
  var random = Math.random() * (1 - 0.5) + 0.5;
  var direction = Math.floor(Math.random() * 4);
  var sideway = Math.random() * (0.5 - -0.5) + -0.5;

  params.width = config.width * random;
  params.height = config.height * random;

  switch (direction) {
    case 0:
      params.x = config.canvas.width + params.width;
      params.dx = -config.speed / random;
      params.y = config.canvas.height / 2 - params.height / 2;
      params.dy = sideway * config.speed;
      break;
    case 1:
      params.x = config.canvas.width / 2 - params.width / 2;
      params.dx = sideway * config.speed;
      params.y = config.canvas.height + params.height;
      params.dy = -config.speed / random;
      break;
    case 2:
      params.x = -params.width;
      params.dx = +config.speed / random;
      params.y = config.canvas.height / 2 - params.height / 2;
      params.dy = sideway * config.speed;
      break;
    case 3:
      params.x = config.canvas.width / 2 - params.width / 2;
      params.dx = sideway * config.speed;
      params.y = -params.height;
      params.dy = +config.speed / random;
      break;
  };

  game.addObject(Enemy, Object.assign(config, params));
};

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

  game.states.enemyInterval = setInterval(() => {
    enemyFactory({
      canvas: gameCanvas,
      image: images[1],
      width: 100,
      height: 100,
      speed: 2
    });
  }, 1000);

  game.start();
}).catch(err => {
  console.log(err);
});

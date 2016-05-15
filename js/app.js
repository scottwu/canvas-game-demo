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

var playerAsset = Object.create(Asset).load({
  src: 'assets/spaceship.png'
});

gameCanvas.getContext('2d').drawImage(playerAsset, 0, 0);

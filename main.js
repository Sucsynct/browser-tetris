var canvas = document.querySelector('.tetris');
var ctx = canvas.getContext('2d');
var width = canvas.width = 240;
var height = canvas.height = 400;
var player = new Player(new Block(), 0, 0);

var game = new Game(ctx, player, width, height);


function draw() {
  requestAnimationFrame(draw);
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, width, height);
  player.block.draw(player.offset);
}

game.initialise();

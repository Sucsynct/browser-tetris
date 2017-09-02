var canvas = document.querySelector('.tetris');
var ctx = canvas.getContext('2d');
var player = new Player(new Block(), 0, 0);
var game = new Game(ctx, 240, 400, player);

game.initialise();
requestAnimationFrame(game.draw);

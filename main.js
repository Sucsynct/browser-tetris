var canvas = document.querySelector('.tetris');
var ctx = canvas.getContext('2d');
var width = canvas.width = 240;
var height = canvas.height = 400;

var player = new Player(new Block(), 0, 0);
var game = new Game(ctx, player, width, height);

game.initialise();
game.draw();

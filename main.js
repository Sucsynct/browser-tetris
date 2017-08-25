var canvas = document.querySelector('.tetris');
var ctx = canvas.getContext('2d');
var width = canvas.width = 240;
var height = canvas.height = 400;
var offset = {};

const testMatrix = [
  [0, 0, 0],
  [1, 1, 1],
  [0, 1, 0]
];

function Player(x, y, matrix, offset) {
  this.x = x + offset.x
  this.y = y + offset.y
  this.matrix = matrix;
}

function drawMatrix(matrix) {
  matrix.forEach((row, y) => {
    row.forEach((state, col) => {
      ctx.fillStyle = '#ffffff';
      if (!(state === 0)) {
        ctx.fillRect(col+offset.x, y+offset.y, 1, 1);
      }
    })
  });
}

function draw() {
  requestAnimationFrame(draw);
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, width, height);
  drawMatrix(testMatrix);
}

function playerDrop() {
  offset.y++;
}

function initialiseGame() {
  ctx.scale(10, 10);
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, width, height);

  offset.x = 0;
  offset.y = 0;
  window.onkeydown = function(e) {
    switch (e.key) {
      case 'ArrowLeft':
        offset.x--;
        break;
      case 'ArrowRight':
        offset.x++;
        break;
      case 'ArrowDown':
        playerDrop();
        break;
    }
  };

  setInterval(playerDrop, 1000);
}

initialiseGame();
draw();

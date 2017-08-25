var canvas = document.querySelector('.tetris');
var ctx = canvas.getContext('2d');
var width = canvas.width = 240;
var height = canvas.height = 400;
var offset = {};
var player;

const blocks = [
  [
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0]
  ],
  [
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 0]
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 0]
  ],
  [
    [0, 0, 0],
    [1, 1, 0],
    [1, 1, 0]
  ],
  [
    [0, 0, 0],
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0]
  ],
  [
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1]
  ],
  [
    [0, 0, 0],
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0]
  ]
];

function Player(matrix, offset) {
  this.x = canvas.width/2 + offset.x;
  this.y = 0 + offset.y;
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
// FIXME: rotate function accessing non-existent indices
function rotateMatrix(matrix) {
  let n = 3;
  matrix.forEach((row, y) => {
    row.forEach((state, col) => {
      let newCol = row;
      let newRow = row + (n - row);
      state = 0;
      matrix[newRow][newCol] = 1;
    })
  })
}


function draw() {
  requestAnimationFrame(draw);
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, width, height);
  drawMatrix(player.matrix);
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

  let randomMatrix = Math.floor((Math.random() * (blocks.length - 1)) + 1);
  player = new Player(blocks[randomMatrix], offset);

  window.onkeydown = e => {
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
      case 'ArrowUp':
        rotateMatrix(player.matrix);
        console.log('Rotate!');
        break;
    }
  };

  setInterval(playerDrop, 1000);
}

initialiseGame();
draw();

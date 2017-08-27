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

function rotateMatrix(matrix) {
  let dupeCols = matrix.length;
  let dupeRows = matrix[0].length;
  let dupe = [];

  for (var i = 0; i < dupeCols; i++) {
    dupe[i] = [];
    for (var j = 0; j < dupeRows; j++) {
      dupe[i][j] = 0;
    }
  }
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[0].length; x++) {
      dupe[x][(dupeRows-1)-y] = matrix[y][x];
    }
  }
  return dupe;
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
        player.matrix = rotateMatrix(player.matrix);
        console.log('Rotate!');
        break;
    }
  };

  setInterval(playerDrop, 1000);
}

initialiseGame();
draw();

const BLOCKS = [
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

function Block(matrix) {
  this.matrix = (matrix) ? matrix : BLOCKS[Math.floor(Math.random()*7 + 1)];
}

Block.prototype.rotate = function() {
  let dupeCols = this.matrix.length;
  let dupeRows = this.matrix[0].length;
  let dupe = [];

  for (var i = 0; i < dupeCols; i++) {
    dupe[i] = [];
    for (var j = 0; j < dupeRows; j++) {
      dupe[i][j] = 0;
    }
  }
  for (var y = 0; y < this.matrix.length; y++) {
    for (var x = 0; x < this.matrix[0].length; x++) {
      dupe[x][(dupeRows-1)-y] = this.matrix[y][x];
    }
  }
  this.matrix = dupe;
};

Block.prototype.draw = function(offset) {
  this.matrix.forEach((row, y) => {
    row.forEach((state, col) => {
      ctx.fillStyle = '#ffffff';
      if (!(state === 0)) {
        ctx.fillRect(col+offset.x, y+offset.y, 1, 1);
      }
    })
  });
};

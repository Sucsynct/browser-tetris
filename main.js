var canvas = document.querySelector('.tetris');
var ctx = canvas.getContext('2d');
var width = canvas.width = 240;
var height = canvas.height = 400;
var player;

function draw() {
  requestAnimationFrame(draw);
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, width, height);
  player.block.draw(player.offset);
}

function initialiseGame() {
  ctx.scale(10, 10);
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, width, height);

  player = new Player(new Block(), 0, 0);

  // set game controls
  window.onkeydown = e => {
    switch (e.key) {
      case 'ArrowLeft':
        player.offset.x--;
        break;
      case 'ArrowRight':
        player.offset.x++;
        break;
      case 'ArrowDown':
        player.playerDrop();
        break;
      case 'ArrowUp':
        player.block.rotate();
        console.log('Rotate!');
        break;
    }
  };

  setInterval(function() {
    player.playerDrop();
  }, 1000);
}

initialiseGame();
draw();

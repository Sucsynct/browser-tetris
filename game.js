function Game(context, player, width, height) {
  this.context = context;
  this.player = player;
  this.width = width;
  this.height = height
}

Game.prototype.initialise = function() {
  ctx.scale(10, 10);
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, this.width, this.height);

  // set game controls
  window.onkeydown = e => {
    switch (e.key) {
      case 'ArrowLeft':
        this.player.offset.x--;
        break;
      case 'ArrowRight':
        this.player.offset.x++;
        break;
      case 'ArrowDown':
        this.player.playerDrop();
        break;
      case 'ArrowUp':
        this.player.block.rotate();
        console.log('Rotate!');
        break;
    }
  };

  setInterval(function() {
    this.player.playerDrop();
  }, 1000);
}

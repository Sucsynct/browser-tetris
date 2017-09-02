function Game(context, height, width, player) {
  this.width = canvas.width = height
  this.height = canvas.height = width;
  this.ctx = context;
  this.player = player
}

Game.prototype.initialise = function() {
  this.ctx.scale(10, 10);
  this.ctx.fillStyle = '#000000';
  this.ctx.fillRect(0, 0, this.width, this.height);

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
};

Game.prototype.draw = function() {
  this.ctx.fillStyle = '#000000';
  this.ctx.fillRect(0, 0, this.width, this.height);
  this.player.block.draw(this.player.offset);
};

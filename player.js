function Player(block, offset_x, offset_y) {
  this.block = block;
  this.offset = {
    x: offset_x,
    y: offset_y
  };

  this.x = canvas.width/2 + this.offset.x;
  this.y = 0 + this.offset.y;
}

Player.prototype.playerDrop = function() {
  this.offset.y++;
};

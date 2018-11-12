var img;

function preload() {
  img = loadImage("assets/16bit_link.gif");
}

class Character {
  constructor( x, y, size) {
    this.posX = x;
    this.posY = y;
  }

  display() {
    image( img, this.posX, this.posY);
  }

  move() {
    //DOWN
    if(keyIsDown(83)) {
      if(this.posY < height - 55) {
        this.posY += 5;
      }
    }
    //UP
    if(keyIsDown(87)) {
      if(this.posY > 5) {
        this.posY -= 5;
      }
    }
    //LEFT
    if(keyIsDown(65)) {
      if(this.posX > 0) {
        this.posX -= 5;
      }
    }
    //Right
    if(keyIsDown(68)) {
      if(this.posX < width - 40) {
        this.posX += 5;
      }
    }
  }
}

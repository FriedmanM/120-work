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
    //UP
    if(keyIsDown(38)) {
      if(this.poxY > 5) {
        this.posY -= 5;
      }
    }
    //DOWN
    if(keyIsDown(40)) {
      if(this.posY < height - 5) {
        this.posY += 5;
      }
    }
    //LEFT
    if(keyIsDown(37)) {
      if(this.posX > 5) {
        this.posX -= 5;
      }
    }
    //Right
    if(keyIsDown(39)) {
      if(this.posX < widthX - 5) {
        this.posX += 5;
      }
    }
  }
}

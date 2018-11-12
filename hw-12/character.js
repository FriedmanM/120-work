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
      if(poxY > 5) {
        posY -= 5;
      }
    }
    //DOWN
    if(keyIsDown(40)) {
      if(posY < height - 5) {
        posY += 5;
      }
    }
    //LEFT
    if(keyIsDown(37)) {
      if(posX > 5) {
        posX -= 5;
      }
    }
    //Right
    if(keyIsDown(39)) {
      if(posX < widthX - 5) {
        posX = posX + 5;
      }
    }
  }
}

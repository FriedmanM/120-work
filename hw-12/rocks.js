class Rock {
  constructor(x, y, r) {
    this.color = 'brown';
    this.x = x;
    this.y = y;
    this.r = r;
    this.deltaX = random(-5, 5);
    this.deltaY = random(-5, 5);
  }

  show() {
    push();
    fill(this.color);
    translate(this.x, this.y);
    ellipse(0, 0, this.r);
    pop();
  }

  move() {
    this.x += this.deltaX;
    this.y += this.deltaY;
  }

  edgeCheck(r) {
    for (let i = (this.length - 1); i >= 0; i--) {
      if ((this.x + this.r) >= width || (this.x - this.r) <= 0) {
          this.splice(i, 1);
        }
      }
// check if the ball has hit a horizontal wall (top or bottom walls)
    for (let i = (this.length - 1); i >= 0; i--) {
      if ((this.y + this.r) >= height + 45 || (this.y - this.r) <= 0) {
          this.splice(i, 1);
      }
    }
  }
}

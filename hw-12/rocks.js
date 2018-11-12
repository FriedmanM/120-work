class Rock {
  constructor(x, y, r) {
    this.color = 'brown';
    this.x = x;
    this.y = y;
    this.r = r;
    this.deltaX = random(-10, 10);
    this.deltaY = random(-10, 10);
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
    if (this.x + this.r >= width || this.x - this.r <= 0) {
      for (let i = r.length - 1; i >= 0; i--) {
          r.splice(i, 1);
        }
      }
// check if the ball has hit a horizontal wall (top or bottom walls)
    if (this.y + this.r >= height || this.y - this.r <= 0) {
      for (let i = r.length - 1; i >= 0; i--) {
          r.splice(i, 1);
      }
    }
  }
}

//create squares variable
let squares;

function setup() {
    createCanvas(windowWidth, 720);

    //assign initial square variable
    squares = new Squares(random(0, width), random(0, height), 40);

    //creates 40 squares
    for (let z = 0; z < 40; ++z) {
      //creating a squares object with class 'squares'
      squares[z] = new Squares(random(0, width), random(0, height), 40);
    }
}

function draw() {
    background( "black" );

    //displays 40 squares and makes them move
    for (z = 0; z < 40; ++z) {
    squares[z].display();
    squares[z].move();
  }
}

//defining the square class
class Squares {
    constructor(x, y, size) {
        this.width = size;
        this.posX = x;
        this.posY = y;
    }

    display() {
        push();
        //create rgb random variables
        var l = random(0, 255);
        var m = random(0, 255);
        var n = random(0, 255);
        noStroke();
        //generate random colors
        fill( l, m, n );
        //create shape with position and widths
        rect(this.posX, this.posY, this.width, this.width);
        pop();
    }

    move() {
      //make the squares shake
        this.posX += random(-3, 3);
    }

}

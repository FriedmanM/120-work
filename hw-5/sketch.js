let x = 320;
let y = 180;
let xspeed = 5;
let yspeed = 2;

let s = 12.5;

function setup() {
  createCanvas( 800, 600 );
}

function draw() {
  background( 'rgb(0, 0, 0)' );

  push();
  noCursor();

  push();
  fill( 'rgb(105, 252, 102)' );
  text("Welcome to Pong", 20, 30 );
  text("Have fun!", 20, 45 );
  pop();

  push();
  fill( 'rgb(105, 252, 102)' );
  rect( 10, mouseY, 20, 150 );
  pop();

  push();
  fill( 'rgb(105, 252, 102)' );
  rect( 770, mouseY, 20, 150 );
  pop();

  push();
  fill( 'rgb(105, 252, 102)' );
  rect(x, y, s*2, s*2);

  /* I found this code on https://editor.p5js.org/projects/BJKWv5Tn
     Because I am using someone elses code, I will explain what it does.

     If the ball hits the x axis, the ball will reverse direction.
     (if x location is greater than the width of canvas minus the length of the side of ball
     or x location is less than the length of the side, reverse direction)

     If the ball hits the y axis, the ball will reverse direction.
     (if y location is greater than the width of canvas minus the length of the side of ball
     or y location is less than the length of the side, reverse direction)


     The ball also increases speed (the x += xspeed and y+= yspeed)
  */

  x += xspeed;
  y += yspeed;
  if (x > width - s || x < s) {
  xspeed = -xspeed;
  }
  if (y > height - s || y < s) {
  yspeed = -yspeed;
  }
  pop();
}

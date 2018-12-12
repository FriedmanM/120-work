let xBall = 320;
let yBall = 180;
let xSpeed = 5;
let ySpeed = 2;

let widthPaddle = 20;

let leftPaddleX = 10;

let rightPaddleX = 770;

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
  text("Welcome to Pong", 40, 30 );
  text("Have fun!", 40, 45 );
  pop();

  //Left Paddle
  push();
  fill( 'rgb(105, 252, 102)' );
  rect( leftPaddleX, mouseY, widthPaddle, 150 );
  pop();

  push();
  fill( 'rgb(105, 252, 102)' );
  rect( rightPaddleX, mouseY, widthPaddle, 150 );
  pop();

  ball();
  ballMovement();

  pop();
}

function ball() {
  fill( 'rgb(105, 252, 102)' );
  rect(xBall, yBall, s*2, s*2);
}

function ballMovement() {
  xBall += xSpeed;
  yBall += ySpeed;
  if ( (xBall > (width - s*2)) || (xBall < 1) ) {
  xSpeed = -xSpeed;
  }
  if ( (yBall > (height - s*2)) || (yBall < 1) ) {
  ySpeed = -ySpeed;
  }
}

function paddleMax() {

}

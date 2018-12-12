//Ball Variables
var xBall = 320;
var yBall = 180;
var xSpeed = 5;
var ySpeed = 2;
var s = 12.5;

//Paddle Variables
var widthPaddle = 20;

var leftPaddleX = 10;
var leftPaddleY = 1;

var rightPaddleX = 770;
var rightPaddleY = 1;
var rightPaddleS = 0.75;

//Boundary Variables
var mx = 1;
var easing = 0.05;
var edge = 2;
var inner = edge + s;

//Score Variables
var playerScore = 0;
var pcScore = 0;

function setup() {
  createCanvas( 800, 600 );
}

function draw() {
  background( 'rgb(0, 0, 0)' );

  //noCursor();

  push();
  fill( 'rgb(105, 252, 102)' );
  text("Welcome to Pong", 40, 30 );
  text("Have fun!", 40, 45 );
  pop();

  push();
  stroke( "white" );
  strokeWeight(10);
  line(400, 0, 400, 25);
  line(400, 50, 400, 75);
  line(400, 100, 400, 125);
  line(400, 150, 400, 175);
  line(400, 200, 400, 225);
  line(400, 250, 400, 275);
  line(400, 300, 400, 325);
  line(400, 350, 400, 375);
  line(400, 400, 400, 425);
  line(400, 450, 400, 475);
  line(400, 500, 400, 525);
  line(400, 550, 400, 575);
  line(400, 600, 400, 625);
  pop();

  push();
  stroke( "white" );
  line(0, 60, 800, 60);
  pop();

  //Left Paddle Function
  leftPaddle();

  //Right Paddle Function
  rightPaddle();


  ball();
  ballMovement();
  paddleBounce();
  scorePoint();
  displayScore();

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

/*
    I am using the code in the left paddle (constrain) to keep the paddle in bounds.
    I found the code here: https://p5js.org/examples/input-constrain.html
    Since I am using code that is not mine, I will explain what it does.

    The code takes the absolute value of the mouseY value, minus the leftPaddleY value,
    which is a constrain function that calculates the borders of the canvas.

    if the value is greater than 0.1, leftPaddleY is added to mouseY minus leftPaddleY * the easing
    (a tiny border inside canvas) in order to block movement outside canvas.
*/



function leftPaddle() {
  fill( 'rgb(105, 252, 102)' );
  rect( leftPaddleX, leftPaddleY, widthPaddle, 150 );
  if (abs(mouseY - leftPaddleY) > 0.1) {
    leftPaddleY = leftPaddleY + (mouseY - leftPaddleY) * easing;
  }
  leftPaddleY = constrain(leftPaddleY, 0, height-150);
}

function rightPaddle() {
  fill( 'rgb(105, 252, 102)' );
  rect( rightPaddleX, rightPaddleY, widthPaddle, 150 );
  if (abs(yBall - rightPaddleY) > 0.1) {
    rightPaddleY = rightPaddleY + (yBall - rightPaddleY) * easing;
  }
  rightPaddleY = constrain(rightPaddleY, 0, height-150);
}

function paddleBounce() {
  //left paddle bounce mechanism
  if ( (xBall < 30 && xBall > 20) ) {
    if ((yBall > leftPaddleY & yBall < leftPaddleY+50)) {
      xSpeed *= -1;
      if (ySpeed == 0) {
        ySpeed = -2;
      }
    }
    else if ((yBall > leftPaddleY+50 & yBall < leftPaddleY+100)) {
      xSpeed *= -1;
      ySpeed = 0;
    }
    if ((yBall > leftPaddleY+100 & yBall < leftPaddleY+150)) {
      xSpeed *= -1;
      if (ySpeed == 0) {
        ySpeed = -2;
      }
    }
  }
  //Right paddle bounce mechanism
  if ( (xBall < 755 && xBall > 745) ) {
    if ((yBall > rightPaddleY & yBall < rightPaddleY+50)) {
      xSpeed *= -1;
      if (ySpeed == 0) {
        ySpeed = -2;
      }
    }
    else if ((yBall > rightPaddleY+50 & yBall < rightPaddleY+100)) {
      xSpeed *= -1;
      ySpeed = 0;
    }
    if ((yBall > rightPaddleY+100 & yBall < rightPaddleY+150)) {
      xSpeed *= -1;
      if (ySpeed == 0) {
        ySpeed = -2;
      }
    }
  }
}

function displayScore() {
  push();
  fill( 'rgb(105, 252, 102)' );
  textSize(60);
  text(playerScore, width/2 - 80, 50);
  text(pcScore, width/2 + 45, 50);
  pop();
}

function scorePoint() {
  if ( xBall < 1 ) {
    ++pcScore;
  }
  else if ( xBall > 775 ) {
    ++playerScore;
  }
}

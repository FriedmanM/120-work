var gameOver = false;
var link = [];
var rocks = [];
var score = 0;

function rockTimer() {
  let b = new Rock(random(width), random(height), 10);
  rocks.push(b);
  // this has the effect of calling itself every x-milliseconds
  setTimeout(rockTimer, random(2000));
}

function setup() {
	createCanvas(800, 600);
  let b = new Rock(width/2, height/2, 10);
  let c = new Character(width/2, height/2, 25);
  rocks.push(b);
  link.push(c);
  rockTimer();


}

function draw() {
  background( 'rgb(144, 205, 96)' );
  if (!gameOver) {
    for (let i = 0; i < rocks.length; i++) {
        rocks[i].move();
        rocks[i].show();
        rocks[i].edgeCheck(rocks);
        rocks[i].linkCheck(rocks, link, score);
    }
    link[0].display();
    link[0].move();
  }
  else {
		// If game is over, end game and display text
		fill(255,44,0);
		textSize(60);
		text("Game Over", width/2, height/2);
  }
  //Game Title
  push();
  stroke( "black" );
  textAlign(CENTER);
  textSize(35);
  text("A Link in P5st", width/2, 35);
  pop();

  push();
  strokeWeight(4);
  stroke( "black" );
  line( 0, 45, width, 45 );
  pop();

  push();
  strokeWeight(4);
  stroke( "black" );
  textSize(20);
  text("Score: " + score, 20, 20);
  pop();
}

var gameOver = false;
var link = [];
var rocks = [];

function setup() {
	createCanvas(800, 600);
  let c = new Character(width/2, height/2, 25);
  let b = new Rock(width/2, height/2, 10);
  link.push(c);
  rocks.push(b);
  rockTimer();
}

function draw() {
  background( 'rgb(144, 205, 96)' );
  if (!gameover) {
    link[0].display();
    link[0].move();

    for (let i = 0; i < bubbles.length; i++) {
        rocks[i].move();
        rocks[i].show();
        rocks[i].edgeCheck(rocks);
    }
  }
  else {
		// If game is over, end game and display text
		fill(255,44,0);
		textSize(60);
		text("Game Over", width/2, height/2);

  //Game Title
  push();
  fill( 'rgb(24, 77, 13)' );
  textAlign(CENTER);
  textSize(35);
  text("Link to P5st", width/2, 35);
  pop();

  push();
  strokeWeight(4);
  stroke( 'rgb(24, 77, 13)' );
  line( 0, 45, width, 45 );
  pop();
}

function rockTimer() {
    let b = new Rock(random(width), random(height), 10;
    rock.push(b);
    // this has the effect of calling itself every x-milliseconds
    setTimeout(rockTimer, random(2000));
}

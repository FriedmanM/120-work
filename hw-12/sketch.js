var gameOver = false;
var link = [];
var bg;

function preload() {
  bg = loadImage("assets/treasure.png");
}

function setup() {
	createCanvas(800, 600);
  background(bg);
  let c = new Character(width/2, height/2, 25);
  link.push(c);
}

function draw() {

  link[0].display();
  link[0].move();

/*	var playerDistance = dist(playerX, playerY);
		//if(playerDistance < 50) {
			// THEYVE COLLIDED! END GAME!
			//gameOver = true;
		}

	 else {

		// if game IS over...
		fill(255,44,0);
		textSize(60);
		text("Game Over", width/2, height/2);
*/

  //title of game
  push();
  fill( "white" );
  textAlign(CENTER);
  textSize(35);
  text("Link to P5st", width/2, 35);
  pop();

  push();
  strokeWeight(4);
  stroke( "white" );
  line( 0, 45, width, 45 );
  pop();
}

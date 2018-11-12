var gameOver = false;
var link = [];

function unloadScrollBars() {
    document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    document.body.scroll = "no"; // ie only
}

function setup() {
	createCanvas(windowWidth, windowHeight);

  let c = new Character(width/2, height/2, 25);
  link.push(c);
}

function draw() {
  background( "black" );

  link[0].display();
  link[0].move();

  //image(character, 100, 100);

	// only do game logic if game isn't over

		// check keys one at a time

	/*	// PLAYER
		if(keyIsDown(38)) { // UP
			// can p1 go up?
			if(playerY > 5) {
				playerY = playerY - 5;
			}
		}

		if(keyIsDown(40)) { // DOWN
			// can p1 go down?
			if(playerY < height - 5) {
				playerY = playerY + 5;
			}
		}

		if(keyIsDown(37)) { // LEFT
			// check that the player isnt too far left
			if(playerX > 5) {
				playerX = playerX - 5;
			}
		}

		if(keyIsDown(39)) { // RIGHT
			// can p1 go right??
			if(playerX < widthX - 5) {
				playerX = playerX + 5;
			}
		}


		// have the two players collided?
	//	var playerDistance = dist(playerX, playerY);
		//if(playerDistance < 50) {
			// THEYVE COLLIDED! END GAME!
			//gameOver = true;
		}

	} else {

		// if game IS over...
		fill(255,44,0);
		textSize(60);
		text("Game Over", width/2, height/2);
*/

//title of game
fill( "white" );
textAlign(CENTER);
textSize(55);
text("Link to P5", windowWidth/2, 100);

}

// anytime a key is pressed, call this function
function keyPressed() {

}

/*
function mousePressed() {
	// put a message in the console w
	// mouse X position

	var theText = "X: " + mouseX + ", Y: " + mouseY;
	console.log(theText);
}*/

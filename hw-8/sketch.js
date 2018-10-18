//create variables
let rows, x_space;
let cols, y_space;
let v, w;
let sqWidth = 50;

function setup() {
  //build canvas, set background in setup so that it doesn't refresh
	createCanvas( windowWidth, 400 );
  background( 'black' );
	frameRate( 5 );
  //sets x_space as 50 and builds rows and cols variables to be equal to the rounded down
  //of width / x_space or width / y_space
	x_space = 50;
	rows = floor( width / x_space );
	y_space = 50;
	cols = floor( height / y_space );
}

function draw() {
  //create smaller variables for filling in shapes
  let v = 1;
  let w = 1;
	let x = 1;
	let y = 1;
  //dummy variable to make this loop run forever
	while ( x != 0 ){
    //random rounded down number * rows or cols depending on variable
    v = floor(random() * rows);
    w = floor(random() * cols);
    x = floor(random() * rows);
		y = floor(random() * cols);

    //loop to create circles of random size and random location based on x*x_space
    //or y*y_space. Creates with black stroke and white inside. Loops until i
    //reaches 10 and starts over.
    for ( var i = 0; i < 10; i++ ) {
      stroke( 'black' );
		  fill( 'white' );
		  ellipse( x*x_space, y*y_space, random(10, 50) );
    }

    //loop to create random squares. Similar to above loop.
    for ( var i = 0; i < 10; i++ ) {
      fill( 'black' );
      stroke( 'white' );
      rect( v*x_space, w*y_space, sqWidth, sqWidth, 10);
    }
  }
}

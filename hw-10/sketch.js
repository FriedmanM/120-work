function setup() {
  //build canvas, set framerate
	createCanvas( windowWidth, 400 );
	frameRate( 4 );
}

function draw() {
		changeSQ();
		//disable cursor and make mouse a circle.
		noCursor();
		ellipse(mouseX, mouseY, 30, 30);
}

function drawCube() {

	//create square array, put the xloc and yloc, size, and color options into one array.
	var cubeArray = [random(0, windowWidth), random(0, height), ( random(0, 200) ),
		 							 random(0, 255), random(0, 255), random(0, 255)];
	//filling the color
  fill( cubeArray[3], cubeArray[4], cubeArray[5] );
	//drawing the squares
	for (let q = 0; q < 2; q++){
  	rect( cubeArray[0], cubeArray[1], cubeArray[2], cubeArray[2], random(0, 30) );
	}
}

function changeSQ() {
	 for (let t = 0; t < 20; t++ ) {
		 if(t % 5 == 0){
			 //changes background every time t % 5 equals 0.
			 background( random(0, 255), random(0,255), random(0,255) );
		 }
		 else {
			 //creates random 'water drops' when t % 5 does not equal 0.
			 ellipse(random(0,windowWidth), random(0, windowHeight), 30, 45);
		 }
	 }
	 //runs function from within this function.
	 drawCube();
}

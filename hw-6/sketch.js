//creating my global values
//creating my endless black square object
let endlessSQ = {};
endlessSQ.loc1 = 0;
endlessSQ.loc2 = 0;
endlessSQ.side = 50;

//creating my triangle object
let endlessLINE = {};
endlessLINE.xloc1 = 0;
endlessLINE.yloc1 = 0;
endlessLINE.xloc2 = 0;
endlessLINE.yloc2 = 0;
endlessLINE.xloc3 = 0;
endlessLINE.yloc3 = 0;

let moduloUsage = 2*2%1; //didn't use modulo, so I'm including it here...

//for user input circle
let circle_min = 20;
let circle_max;

function setup() {
  createCanvas( windowWidth, windowHeight );
  background( "black" );
  noCursor();
}

function draw() {

  //rate in which objects appear per second
  frameRate(5);

  //create random locations for the squares
  endlessSQ.loc1 = floor( random(width) );
  endlessSQ.loc2 = floor( random(width) );

  /*constrains location of square to within canvas boundary
    Edit: seems like my attempts at this are futile...
    squares have a mind of their own.
  */
  endlessSQ.loc1 = constrain(endlessSQ.loc1, 0, width-25);
  endlessSQ.loc2 = constrain(endlessSQ.loc2, 0, width-25);

  //fill square black with white borders, draw them with rounded corners
  fill( "black" );
  stroke( "white" );
  rect( endlessSQ.loc1, endlessSQ.loc2, endlessSQ.side, endlessSQ.side, 10);


  push();
  //random color variables
  let rred = floor( random(256) );
  let rgreen = floor( random(256) );
  let rblue = floor( random(256) );

  //ok, so wacky math stuff that somehow produced a triangle at the beginning
  //followed by a line at the end. Pretty neat.
  endlessLINE.xloc1 = 0;
  endlessLINE.yloc1 = floor( random(width) );
  endlessLINE.xloc2 += sqrt(endlessLINE.xloc1+4000);
  endlessLINE.yloc2 = sqrt(endlessLINE.yloc1+400);
  endlessLINE.xloc3 += sqrt(endlessLINE.xloc2);
  endlessLINE.yloc3 = sqrt(endlessLINE.yloc2);

  //applying color and drawing triangle.
  stroke( rred, rgreen, rblue );
  fill( rred, rgreen, rblue );
  triangle( endlessLINE.xloc1, endlessLINE.yloc1, endlessLINE.xloc2,
            endlessLINE.yloc2, endlessLINE.xloc3, endlessLINE.yloc3);
  pop();
  push();
  //neat circle that follows mouse around and changes size as you
  //move across the canvas
  circle_max = width/4;
  //mapping circle to mouse x coordinate, with min and max sizes.
  let circle_size = map( mouseX, 0, width, circle_min, circle_max );

  //that darn random color variable again! this time different.
  let rred2 = floor( random(256) );
  let rgreen2 = floor( random(256) );
  let rblue2 = floor( random(256) );

  //drawing actual circle.
  stroke( rred2, rgreen2, rblue2 );
  strokeWeight( 5 );
  noFill();
  ellipse( mouseX, mouseY, circle_size);
  pop();
}

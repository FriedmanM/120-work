function setup() {
  createCanvas( 600, 600 );
}

function draw() {
  background( "orange" );
  push();

  //left arm
  push();
  translate( 100, 100 );
  rotate( "50" );
  rect( -80, 70, 100, 250, 98 );
  pop();

  //Body- will use a rectangle
  push();
  translate( 300, 240 );
  fill( 'rgb(0,0,0)' );
  rect( -150, 0, 300, 500, 90);
  pop();

  //Shirt- will try to form a button down. will use ellipse and rect
  push();
  translate( 300, 240 );
  stroke( "green" );
  line( 10, 0, 10, 600 );
  stroke( "green" );
  line( -10, 0, -10, 600 );

  //button1
  push();
  stroke( "green" );
  strokeWeight( "2" );
  fill( 'rgba(0, 0, 0, 0.65)' );
  ellipse ( 0, 130, 10, 10 );

  //button2
  stroke( "green" );
  strokeWeight( "2" );
  fill( 'rgba(0, 0, 0, 0.65)' );
  ellipse ( 0, 180, 10, 10 );

  //button3
  stroke( "green" );
  strokeWeight( "2" );
  fill( 'rgba(0, 0, 0, 0.65)' );
  ellipse ( 0, 230, 10, 10 );

  //button4
  stroke( "green" );
  strokeWeight( "2" );
  fill( 'rgba(0, 0, 0, 0.65)' );
  ellipse ( 0, 280, 10, 10 );

  //button5
  stroke( "green" );
  strokeWeight( "2" );
  fill( 'rgba(0, 0, 0, 0.65)' );
  ellipse ( 0, 330, 10, 10 );
  pop();

  //stripes on shirt
  //stripe1
  push();
  stroke( "green" );
  line( 40, 25, 40, 400 );

  //stripe2
  stroke( "green" );
  line( 80, 25, 80, 400 );

  //stripe3
  stroke( "green" );
  line( 120, 25, 120, 400 );

  //stripe4
  stroke( "green" );
  line( -40, 25, -40, 400 );

  //stripe5
  stroke( "green" );
  line( -80, 25, -80, 400 );

  //stripe6
  stroke( "green" );
  line( -120, 25, -120, 400 );
  pop();

  //pocket
  push();
  fill( "black" );
  rect( 45, 150, 70, 80 );

  fill ( "black" );
  rect( 45, 165, 70, 65 );

  fill ( "black" );
  rect( 65, 165, 32.5, 65);
  pop();

  pop();

  pop();

  //head- will use an ellipse (more vertical)
  push();
  translate( 300, 240 );
  ellipse( 0, 0, 200, 220 );

  /*Left eye - will use horizontal ellipses, with ellipses inside,
    and a circle for the pupil*/
  push();
  translate( -40 , -40 );
  ellipse( 0, 0, 20, 12 );
  fill( "blue" );
  ellipse( 0, 0, 12, 10 );
  fill( 'rgb(0,0,0)');
  ellipse ( 0, 0, 4, 4);
  pop();

  //Right eye- same as left eye
  push();
  translate ( 40, -40 );
  ellipse( 0, 0, 20, 12 );
  fill( "blue" );
  ellipse( 0, 0, 12, 10 );
  fill( 'rgb(0,0,0)');
  ellipse ( 0, 0, 4, 4);
  pop();

  //Left eyebrow
  push();
  translate( -55, -70 );
  rotate( -50 );
  fill( "#50492e" );
  rect( 0, 0, 30, 6 );
  pop();

  //Right eyebrow
  push();
  translate( 25, -65 );
  rotate( 50 );
  fill( "#50492e" );
  rect( 0, 0, 30, 6 );
  pop();

  //Mouth
  push();
  arc( 0, 50, 50, 20, 0, PI /2);
  pop();
  pop();

  pop();



}

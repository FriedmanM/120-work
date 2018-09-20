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
  fill( 'rgb(0,0,0)' );
  rect( -80, 70, 75, 250, 0, 0, 98, 98 );


  //shirt stripes on arm - green lines
  push();
  translate( -60, 78 );
  stroke( "green" );
  line( 0, -3, 0, 237 );
  stroke( "green" );
  line( 40, 0, 40, 247 );
  pop();
  pop();

  //fingers, will use triangles
  push();
  translate( 85, 150 );
  rotate( radians(-15) );
  fill( 'rgb(0, 56, 255)')
  triangle( 0, 0, 40, -20, 25, -80 );
  pop();

  push();
  translate( 55, 150 );
  rotate( radians(-15) );
  fill( 'rgb(0, 56, 255)')
  triangle( 0, 0, 40, -20, 25, -80 );
  pop();

  push();
  translate( 25, 150 );
  rotate( radians(-15) );
  fill( 'rgb(0, 56, 255)')
  triangle( 0, 0, 40, -20, 25, -80 );
  pop();

  push();
  translate( 120, 150 );
  rotate( radians(-15) );
  fill( 'rgb(0, 56, 255)')
  triangle( 0, 0, 40, -20, 25, -20 );
  pop();

  //left hand
  push();
  translate( 75, 150 );
  rotate( radians(-15));
  fill ( 'rgb(116, 128, 244)' )
  ellipse( 0, 0, 120, 80 );
  pop();

  //right arm
  push();
  translate( 425, 340 );
  rotate( radians(-15));
  fill( 'rgb(0,0,0)');
  rect( 0, 0, 75, 250, 25, 98, 0, 0 );
  pop();

  //right arm stripes - will use lines with green fill
  push();
  translate( 450, 350 );
  rotate( radians(-15) );
  stroke( "green" );
  line( 0, 0, 0, 234 );
  stroke( "green" );
  line( 40, -6, 40, 234 );
  pop();
  pop();

  //right hand
  push();
  translate( 530, 600 );
  rotate( radians(-15));
  fill ( 'rgb(116, 128, 244)' )
  ellipse( 0, 0, 120, 80 );
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
  ellipse( 0, 130, 10, 10 );

  //button2
  stroke( "green" );
  strokeWeight( "2" );
  fill( 'rgba(0, 0, 0, 0.65)' );
  ellipse( 0, 180, 10, 10 );

  //button3
  stroke( "green" );
  strokeWeight( "2" );
  fill( 'rgba(0, 0, 0, 0.65)' );
  ellipse ( 0, 230, 10, 10 );

  //button4
  stroke( "green" );
  strokeWeight( "2" );
  fill( 'rgba(0, 0, 0, 0.65)' );
  ellipse( 0, 280, 10, 10 );

  //button5
  stroke( "green" );
  strokeWeight( "2" );
  fill( 'rgba(0, 0, 0, 0.65)' );
  ellipse( 0, 330, 10, 10 );
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

  //crazy hair head thing, will use triangles and rotate them
  push();
  translate( 300, 120);
  fill( "gold" );
  triangle( -50, 50, 50, 50, 0, -120);
  pop();

  push();
  translate( 375, 120 );
  rotate( radians(35) );
  fill( "gold" );
  triangle( -50, 50, 50, 50, 0, -120);
  pop();

  push();
  translate( 350, 120 );
  rotate( radians(15) );
  fill( "gold" );
  triangle( -50, 50, 50, 50, 0, -120);
  pop();

  push();
  translate( 225, 120 );
  rotate( radians(-35) );
  fill( "gold" );
  triangle( -50, 50, 50, 50, 0, -120);
  pop();

  push();
  translate( 250, 120 );
  rotate( radians(-15) );
  fill( "gold" );
  triangle( -50, 50, 50, 50, 0, -120);
  pop();



  //head- will use an ellipse (more vertical)
  push();
  translate( 300, 240 );
  fill ( 'rgb(116, 128, 244)' )
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

  //Right eye- same as left eye with different color
  push();
  translate ( 40, -40 );
  ellipse( 0, 0, 20, 12 );
  fill( 'rgb(41, 144, 154)' );
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

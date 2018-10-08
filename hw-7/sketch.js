let ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

var bg;

function preload() {
  bg = loadImage("assets/space.jpg");
}

function setup() {
    createCanvas(800, 600);
    background(bg);
}

function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

    if ((ball.x >= width || ball.x <= 0) && ball.width >= 40) {
        ball.width -= 10;
    }

    if ((ball.y >= width || ball.y <= 0) && ball.width >= 40) {
        ball.width -= 10;
    }


    var rred = floor (random(0, 256));
    var rgreen = floor (random(0, 256));
    var rblue = floor (random(0, 256));

    var sred = floor (random(0, 256));
    var sgreen = floor (random(0, 256));
    var sblue = floor (random(0, 256));

    stroke( sred, sgreen, sblue);
    fill( rred, rgreen, rblue);
    rect(ball.x, ball.y, ball.width, ball.width);

    if (mouseIsPressed) {
        ball.width += 1;
      }
}

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
}

function draw() {
    push();
    background(bg);
    pop();

    push();
    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }


    var rred = floor (random(0, 256));
    var rgreen = random(0, 256);
    var rblue = random(0, 256);

    var sred = random(0, 256);
    var sgreen = random(0, 256);
    var sblue = random(0, 256);

    stroke( sred, sgreen, sblue);
    fill( rred, rgreen, rblue);
    rect(ball.x, ball.y, ball.width, ball.width);
    pop();
}

function mouseIsPressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}

# Michael Friedman

["Algorithmic" Sketch](https://friedmanm.github.io/120-work/hw-6/)
---

## This week's ReadMe Project:
I was assigned to review this code and explain it line for line. I will attempt to do so.
---

*This following lines create an object containted called ball*
let ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

*creates the canvas, size of canvas, and background color*
function setup() {
    createCanvas(windowWidth, 400);
    background(255);
}


*calls the draw function*
function draw() {
*creating the x and y axis for the ball. the function does this by multiplying the delta variable by the scale variable*
*creates the x axis for the object 'ball'*
    ball.x += ball.delta_x * ball.scale_x;
*creates the y axis for the object 'ball'*
    ball.y += ball.delta_y * ball.scale_y;

*if statement to reverse the ball when it hits the wall. It basically says "if the x location of the ball is greater than the width of canvas, or if the x location of ball is less than or equal to zero, reverse direction (by making ball.x negative)". Same goes for the y axis.*
    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }
*fills ball with white color*
    fill(255);
    *draws a circle with 'ball.x' location, 'ball.y' location, ball.width sides*
    ellipse(ball.x, ball.y, ball.width, ball.width);
}
*function called that causes things to happen when the mouse is clicked (only initiated once per click)*
function mousePressed() {
*maps the mouse x and mouse y location toball.scale. This changes the direction of the ball from .5 to 10, depending on the x or y location of the cursor.*
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}

// Import stxlesheets
const lib = require('./library/display');

let canvas = lib.makeCanvas(256, 256);
lib.stage.width = canvas.width;
lib.stage.height = canvas.height;

let ball = lib.circle(32, 'gray', 'black', 2, 96, 128);
let rect = lib.rectangle(50, 10, 'black', 'black', 2, 128, 240);

ball.vx = 3;
ball.vy = 2;
//Start the game loop
gameLoop();

function gameLoop() {
  requestAnimationFrame(gameLoop);
  checkCollision();
  //Move the ball
  ball.x += ball.vx;
  ball.y += ball.vy;

  //Bounce the ball off the canvas edges.
  //Left and right
  if (ball.x < 0 || ball.x + ball.diameter > canvas.width) {
    ball.vx = -ball.vx;
  }
  //Top and bottom
  if (ball.y < 0 || ball.y + ball.diameter > canvas.height) {
    ball.vy = -ball.vy;
  }
  //Render the animation

  lib.render(canvas);
}

const ctx = canvas.getContext('2d');

// Clear canvas function
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Draw the rectangle
function drawRectangle() {
  ctx.fillStyle = 'blue';
  ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
}

function checkCollision() {
  // Calculate the closest point on the rectangle to the circle's center

  if (
    ball.y + ball.diameter / 2 >= rect.y &&
    ball.x + ball.diameter / 2 > rect.x &&
    ball.x - ball.diameter / 2 < rect.x + rect.width
  ) {
    alert('Game finished');
  }
}

// Handle arrow key presses
window.addEventListener('keydown', (event) => {
  clearCanvas();

  switch (event.key) {
    case 'ArrowLeft':
      if (rect.x <= 0) {
        break;
      }
      rect.x -= 5;
      break;
    case 'ArrowRight':
      if (rect.x >= 200) {
        break;
      }
      rect.x += 5;
      break;
  }

  drawRectangle();
});

// Initial drawing
drawRectangle();

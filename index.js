const lib = require('./library/display');

let canvas = lib.makeCanvas(256, 256);
lib.stage.width = canvas.width;
lib.stage.height = canvas.height;

let rect = lib.rectangle(50, 10, 'black', 'black', 2, 128, 240);

drawRectangle();

gameLoop();

function gameLoop() {
  requestAnimationFrame(gameLoop);
  //Move the ball
  ball.x += ball.vx;
  ball.y += ball.vy;

  //Render the animation

  lib.render(canvas);
}

const ctx = canvas.getContext('2d');

function drawRectangle() {
  ctx.fillStyle = 'blue';
  ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
}

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

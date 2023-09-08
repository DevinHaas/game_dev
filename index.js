const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const rect = {
  x: 100,
  y: 100,
  width: 25,
  height: 25,
  speed: 3,
  dx: 0, // Horizontal velocity
  dy: 0, // Vertical velocity
};

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawRectangle() {
  ctx.fillStyle = 'blue';
  ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
}

window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowLeft':
      rect.dx = -rect.speed;
      break;
    case 'ArrowRight':
      rect.dx = rect.speed;
      break;
    case 'ArrowUp':
      rect.dy = -rect.speed;
      break;
    case 'ArrowDown':
      rect.dy = rect.speed;
      break;
  }
});

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'ArrowLeft':
    case 'ArrowRight':
      rect.dx = 0;
      break;
    case 'ArrowUp':
    case 'ArrowDown':
      rect.dy = 0;
      break;
  }
});

function update() {
  clearCanvas();

  // Update the position based on velocity
  rect.x += rect.dx;
  rect.y += rect.dy;

  drawRectangle();

  // Request the next frame
  requestAnimationFrame(update);
}

// Start the game loop
update();

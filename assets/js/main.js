const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

let primary = '#AF1E2D';
let secondary = '#FFCE00';

const grid = 32;
let count = 0;

let snake = {
  x: grid * 5,
  y: grid * 5,

  vx: grid,
  vy: 0,

  cells: [],

  maxCells: 4
};

let apple = {
  x: grid * 10,
  y: grid * 10
};

function Update() {
  requestAnimationFrame(Update);

  if(++count < 4) {
    return;
  }

  count = 0;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  snake.x += snake.vx;
  snake.y += snake.vy;

  if(snake.x < 0) {
    snake.x = canvas.width - grid;
  } else if (snake.x >= canvas.width) {
    snake.x = 0;
  }

  snake.cells.unshift({x: snake.x, y: snake.y});

  if(snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }

  ctx.fillStyle = primary;
  snake.cells.forEach(function(cell, index) {
    ctx.fillRect(cell.x, cell.y, grid-1, grid-1);
  });
}

//Start the game
requestAnimationFrame(Update);
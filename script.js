let board = document.getElementById("board");
let startBtn = document.getElementById("startBtn");

let boxes = [];
let snake;
let direction;
let food;
let game;

// board create
for (let i = 0; i < 100; i++) {
  let div = document.createElement("div");
  div.classList.add("box");
  board.appendChild(div);
  boxes.push(div);
}

function startGame() {
  snake = [2, 1, 0];
  direction = 1;
  food = Math.floor(Math.random() * 100);

  clearInterval(game);
  draw();

  game = setInterval(moveSnake, 350);
}

function draw() {
  boxes.forEach(box => box.className = "box");

  snake.forEach(index => {
    boxes[index].classList.add("snake");
  });

  boxes[food].classList.add("food");
}

function moveSnake() {
  let head = snake[0] + direction;

  if (head < 0 || head >= 100) {
    alert("Game Over");
    clearInterval(game);
    return;
  }

  snake.unshift(head);

  if (head === food) {
    food = Math.floor(Math.random() * 100);
  } else {
    snake.pop();
  }

  draw();
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") direction = 1;
  if (e.key === "ArrowLeft") direction = -1;
  if (e.key === "ArrowDown") direction = 10;
  if (e.key === "ArrowUp") direction = -10;
});

startBtn.addEventListener("click", startGame);

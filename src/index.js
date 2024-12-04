import Grid from "./classes/grid.js";
import PipeGenerator from "./classes/PipeGenerator.js";
import './styles/style.css'

// Import images dynamically if needed
const imagesContext = require.context("../images", false, /\.(png|jpe?g|gif)$/);
imagesContext.keys().forEach(imagesContext);

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const winLossText = document.getElementById("winLossText");
const nextButton = document.getElementById("next");
const gameOverButtons = document.getElementById("game-over-buttons");

let gameState = "playing";

let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

const X_OFFSET = 400;
const Y_OFFSET = 10;
const ROWS = 7;
const COLUMNS = 9;
const IMAGE_SIZE = 100;
const BLOCKED_POSITIONS = 7;

const pipeGen = new PipeGenerator(ctx, 5);

const grid = new Grid(
  false,
  pipeGen,
  X_OFFSET,
  Y_OFFSET,
  ROWS,
  COLUMNS,
  BLOCKED_POSITIONS,
  IMAGE_SIZE,
  canvas
);

nextButton.addEventListener("click", () => {
  gameState = "playing";
  hideGameOverButtons();
  location.reload();
});

function resizeCanvas() {
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
}

function showGameOverButtons() {
  gameOverButtons.style.display = "flex";
}

function hideGameOverButtons() {
  gameOverButtons.style.display = "none";
}

function getMousePos(e) {
  const rect = canvas.getBoundingClientRect();
  // Calculate mouse positions correctly with scaling
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const mouseX = (e.clientX - rect.left) * scaleX;
  const mouseY = (e.clientY - rect.top) * scaleY;
  return { mouseX, mouseY };
}

canvas.addEventListener("mousemove", (e) => {
  e.preventDefault();
  const { mouseX, mouseY } = getMousePos(e);

  grid.getMousePosition(mouseX, mouseY);
});

canvas.addEventListener("click", (e) => {
  e.preventDefault();
  const { mouseX, mouseY } = getMousePos(e);
  if (
    mouseX < X_OFFSET ||
    mouseX > X_OFFSET + IMAGE_SIZE * COLUMNS ||
    mouseY < Y_OFFSET ||
    mouseY > Y_OFFSET + IMAGE_SIZE * ROWS
  )
    return;

  grid.changePipe(mouseX, mouseY);
});

function checkGameOver() {
  if (grid.waterCompleted) {
    gameState = "over";
    grid.waterReachedEnd
      ? (winLossText.textContent = "You won!")
      : (winLossText.textContent = "You lost!");
    showGameOverButtons();
    return;
  }
}

function animate() {
  if (gameState === "over") return; // Stop animation if the game is over

  window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before drawing
  checkGameOver(); // Check if the game has been won
  grid.draw();
  pipeGen.draw();
  grid.update();
}
animate();

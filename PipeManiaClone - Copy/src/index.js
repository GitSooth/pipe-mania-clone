const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const grid = new Grid(500, 100, 9, 7, 100, canvas);

grid.init();

canvas.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.x - rect.left;
  const mouseY = e.y - rect.top;

  grid.getMousePosition(mouseX, mouseY);
});

window.onclick = () => {
  grid.changePipe();
};

function animate() {
  window.requestAnimationFrame(animate);
  grid.draw(c);
}

animate();

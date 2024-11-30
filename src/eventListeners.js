canvas.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  const mousePosition = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };

  grid.forEach((square) => {
    square.isHovered = square.isBeingHovered(mousePosition);
  });
});

canvas.addEventListener("mouseleave", () => {
  grid.forEach((square) => (square.isHovered = false));
});

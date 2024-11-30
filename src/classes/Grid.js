class Grid {
  constructor(xOffset, yOffset, rows, cols, imageSize, canvas) {
    this.images = [];
    this.pipes = [null][null];
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    this.imageSize = imageSize;
    this.rows = rows;
    this.cols = cols;
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
  }

  init() {
    for (let i = 0; i < 15; i++) {
      const image = new Image();
      image.src = `../images/${i}.png`;
      this.images.push(image);
    }

    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        const pipe = new Pipe(
          row * this.imageSize + this.xOffset,
          col * this.imageSize + this.yOffset,
          this.images[0].src,
          this.imageSize
        );
        this.pipes[col][row] = pipe;
      }
    }

    //Place valve
    // const startRow = getRandomIntInclusive(0, this.rows - 1);
    // const startCol = getRandomIntInclusive(0, this.cols);

    // console.log(`BEFORE: X: ${startCol} | Y: ${startRow}`);
    // // if (startRow === this.rows - 1) startRow = this.rows - 1;
    // // console.log(`AFTER: X: ${startCol} | Y: ${startRow}`);

    // console.log(this.pipes[startCol * startRow]);
    // const pipe = this.pipes[startCol * startRow];

    // pipe.image.src = this.images[14].src;
    // pipe.isValve = true;

    // console.log(this.pipes);
  }

  getMousePosition(mouseX, mouseY) {
    this.pipes.forEach((pipe) => {
      pipe.isHovered = pipe.isInside(mouseX, mouseY);
    });
  }

  changePipe() {
    this.pipes.forEach((pipe) => {
      isFinite(pipe.isHovered);
      pipe.changeImage();
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.pipes.forEach((pipe) => {
      pipe.draw(this.ctx);
    });
  }
}

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

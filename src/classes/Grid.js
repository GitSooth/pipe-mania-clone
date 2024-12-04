import Pipe from "./Pipe.js";

export default class Grid {
  constructor(
    keepConfiguration,
    pipeGenerator,
    xOffset,
    yOffset,
    rows,
    cols,
    blockedPositions,
    imageSize,
    canvas
  ) {
    this.keepConfiguration = keepConfiguration;
    this.waterCompleted = false;
    this.pipeGenerator = pipeGenerator;
    this.pipes = [];
    this.configuration = [];
    this.connectedPipes = [];
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    this.imageSize = imageSize;
    this.rows = rows;
    this.cols = cols;
    this.blockedPositions = blockedPositions;
    this.canvas = canvas;
    this.startPos = {
      x: 0,
      y: 0,
    };
    this.ctx = canvas.getContext("2d");
    this.flowStarted = false;
    this.flowing = false;
    this.waterReachedEnd = false;
    this.init();
  }

  init() {
    this.generateGridConfiguration();

    //Place valve, end pipe and blocked squares
    this.placeSpecialPipes();

    this.flowStarted = true;
    this.waterCompleted = false;

    this.draw();
  }

  generateGridConfiguration() {
    for (let row = 0; row < this.rows; row++) {
      const x = [];
      for (let col = 0; col < this.cols; col++) {
        const pipe = new Pipe(
          0,
          this.pipeGenerator,
          this.ctx,
          col * this.imageSize + this.xOffset,
          row * this.imageSize + this.yOffset,
          this.imageSize
        );
        x.push(pipe);
      }
      this.pipes.push(x);
      this.configuration = this.pipes;
    }
  }

  update() {
    this.findNeighbors();

    if (this.flowStarted) this.simulateWaterFlow();
  }

  getMousePosition(mouseX, mouseY) {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        if (!this.pipes[row][col]) return;
        var pipe = this.pipes[row][col];

        pipe.isHovered = pipe.isInside(mouseX, mouseY);
      }
    }
  }

  changePipe(mouseX, mouseY) {
    const column = Math.floor((mouseX - this.xOffset) / this.imageSize);
    const row = Math.floor((mouseY - this.yOffset) / this.imageSize);
    this.pipes[row][column].changeImage();

    this.update();
  }

  placeSpecialPipes() {
    const startRow = Math.floor(Math.random() * (this.rows - 1)); //Cant be on bottom row, so it's not obstructed
    const startCol = Math.floor(Math.random() * this.cols);
    const startPipe = this.pipes[startRow][startCol];
    this.startPos.x = startRow;
    this.startPos.y = startCol;

    startPipe.changePipeProperties(14);

    let endRow, endCol;
    do {
      endRow = Math.floor(Math.random() * this.rows);
      endCol = Math.floor(Math.random() * this.cols);
    } while (startRow == endRow || startCol == endCol || endRow == 0); //Cant be on top row, so it's not obstructed

    const endPipe = this.pipes[endRow][endCol];
    endPipe.changePipeProperties(13);

    this.placeBlockedPositions(
      this.blockedPositions,
      startRow,
      startCol,
      endRow,
      endCol
    );
  }

  placeBlockedPositions(numberOfBlockedPositions) {
    let randomRow, randomCol;
    for (let i = 0; i < numberOfBlockedPositions; i++) {
      do {
        randomRow = Math.floor(Math.random() * this.rows);
        randomCol = Math.floor(Math.random() * this.cols);
      } while (
        this.pipes[randomRow][randomCol].id == 12 || //Rock block placed already
        this.pipes[randomRow][randomCol].id == 13 || //End block placed already
        this.pipes[randomRow][randomCol].id == 14 || //Start block placed already
        (randomRow > 0 && this.pipes[randomRow - 1][randomCol].id == 14) || //must not be placed below the starting block
        (randomRow < this.rows - 1 &&
          this.pipes[randomRow + 1][randomCol].id == 13) //must not be placed above the end block
      );

      const blockedPipe = this.pipes[randomRow][randomCol];

      blockedPipe.changePipeProperties(12);
    }
  }

  updatePipe(row, col) {
    const x = col * this.imageSize;
    const y = row * this.imageSize;

    this.pipes[row][col].draw(this.ctx, x, y);
  }

  findNeighbors() {
    const visited = new Set();
    const queue = [[this.startPos.x, this.startPos.y]];
    this.connectedPipes = [];

    while (queue.length > 0) {
      const [row, col] = queue.shift();
      const currentPipe = this.pipes[row][col];

      // Skip if already visited
      const key = `${row},${col}`;
      if (visited.has(key)) continue;
      visited.add(key);
      this.connectedPipes.push([row, col]);

      // Check each connection of the current pipe
      for (const direction of currentPipe.connections) {
        const [nextRow, nextCol] = this.getNextPosition(row, col, direction);
        if (this.isValidPosition(nextRow, nextCol)) {
          const nextPipe = this.pipes[nextRow][nextCol];
          const oppositeDirection = this.getOppositeDirection(direction);

          // Add to queue if the connection is valid
          if (
            nextPipe.connections.includes(oppositeDirection) &&
            !visited.has(`${nextRow},${nextCol}`)
          ) {
            queue.push([nextRow, nextCol]);
          }
        }
      }
    }
  }

  simulateWaterFlow() {
    let index = 0;
    const fillNextPipe = () => {
      if (index < this.connectedPipes.length) {
        const [row, col] = this.connectedPipes[index];
        const pipe = this.pipes[row][col];

        // Mark the pipe as flowing and update its visuals
        pipe.flowing = true;
        this.updatePipe(row, col);

        index++;
        setTimeout(fillNextPipe, 5000); // 5 seconds per pipe
      } else {
        if (!this.connectedPipes[index - 1]) return;
        const [row, col] = this.connectedPipes[index - 1];
        const pipe = this.pipes[row][col];

        if (pipe.id == 13) {
          //Win con
          this.waterCompleted = true;
          this.waterReachedEnd = true;
        } else {
          //Lose con
          this.waterCompleted = true;
          this.waterReachedEnd = false;
        }
      }
    };

    setTimeout(fillNextPipe, 5000); // Start after 5 seconds
  }

  getNextPosition(x, y, direction) {
    switch (direction) {
      case "up":
        return [x - 1, y];
      case "down":
        return [x + 1, y];
      case "left":
        return [x, y - 1];
      case "right":
        return [x, y + 1];

      default:
        return [x, y];
    }
  }

  getOppositeDirection(direction) {
    switch (direction) {
      case "up":
        return "down";
      case "down":
        return "up";
      case "left":
        return "right";
      case "right":
        return "left";
    }
  }

  isValidPosition(x, y) {
    return x >= 0 && x < this.rows && y >= 0 && y < this.cols;
  }

  isGameOver() {
    return this.waterCompleted;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        this.pipes[row][col].draw(this.ctx);
      }
    }
  }
}

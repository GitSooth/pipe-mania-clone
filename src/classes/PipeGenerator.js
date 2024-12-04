export default class PipeGenerator {
  constructor(ctx, queueSize) {
    this.images = [];
    this.ctx = ctx;
    this.pipeQueue = [];
    this.queueSize = queueSize;
    this.init();
  }

  init() {
    for (let i = 0; i < 15; i++) {
      const image = new Image();
      image.src = `../images/${i}.png`;
      this.images.push(image);
    }

    for (let i = 0; i < this.queueSize; i++) {
      this.getNewRandomPipe();
    }

    this.draw();
  }

  popPipe() {
    this.pipeQueue.shift();
    this.getNewRandomPipe();
  }

  getNewRandomPipe() {
    const index = Math.floor(Math.random() * 10) + 1;

    this.pipeQueue.push(index);
  }

  draw() {
    this.ctx.fillStyle = "rgba(0, 0, 0, 1)";
    this.ctx.fillRect(100, 10, 150, 700);

    for (let i = 0; i < this.queueSize; i++) {
      this.ctx.drawImage(
        this.images[this.pipeQueue[i]],
        115,
        25 + i * 140,
        120,
        120
      );
    }
  }
}

export default class Pipe {
  constructor(id, pipeGenerator, ctx, x, y, imageSize) {
    this.id = id;
    this.pipeGenerator = pipeGenerator;
    this.x = x;
    this.y = y;
    this.imageSize = imageSize;
    this.image = new Image();
    this.isHovered = false;
    this.isValve = false;
    this.isEnd = false;
    this.isBlocked = false;
    this.connections = [];
    this.fillLevel = 0;
    this.flowDirection = null;
    this.ctx = ctx;

    this.init();
  }

  init() {
    this.setPipeProperties(this.id);

    this.draw();
  }

  updateFill(progress, flowDirection) {
    this.fillLevel = progress;
    this.flowDirection = flowDirection;
    if (progress >= 100) {
      this.flowing = false;
    }
  }

  setPipeProperties(id) {
    this.id = id;
    this.image.src = this.pipeGenerator.images[id].src;

    switch (this.id) {
      case 12:
        this.isBlocked = true;
        break;

      case 13:
        this.isEnd = true;
        break;

      case 14:
        this.isValve = true;
        break;
    }

    this.addDirections();
  }

  changePipeProperties(newId) {
    this.id = newId;

    this.setPipeProperties(this.id);
  }

  isInside(mouseX, mouseY) {
    return (
      mouseX >= this.x &&
      mouseX < this.x + this.imageSize &&
      mouseY >= this.y &&
      mouseY < this.y + this.imageSize
    );
  }

  changeImage() {
    if (this.isValve || this.isEnd || this.isBlocked || !this.isHovered) return;

    this.changePipeProperties(this.pipeGenerator.pipeQueue[0]);

    this.pipeGenerator.popPipe();
  }

  addDirections() {
    this.connections = [];

    const up = "up";
    const down = "down";
    const left = "left";
    const right = "right";

    switch (this.id) {
      case 1:
        this.connections.push(up);
        this.connections.push(down);
        break;
      case 2:
        this.connections.push(left);
        this.connections.push(right);
        break;
      case 3:
        this.connections.push(up);
        this.connections.push(down);
        this.connections.push(left);
        this.connections.push(right);
        break;
      case 4:
        this.connections.push(up);
        this.connections.push(right);
        break;
      case 5:
        this.connections.push(right);
        this.connections.push(down);
        break;
      case 6:
        this.connections.push(left);
        this.connections.push(down);
        break;
      case 7:
        this.connections.push(up);
        this.connections.push(left);
        break;
      case 8:
        this.connections.push(up);
        this.connections.push(left);
        this.connections.push(right);
        break;
      case 9:
        this.connections.push(up);
        this.connections.push(right);
        this.connections.push(down);
        break;
      case 10:
        this.connections.push(left);
        this.connections.push(right);
        this.connections.push(down);
        break;
      case 11:
        this.connections.push(up);
        this.connections.push(down);
        this.connections.push(left);
        break;
      case 13:
        this.connections.push(up);
        break;
      case 14:
        this.connections.push(down);
        break;
    }
  }

  draw() {
    if (this.flowing) {
      this.ctx.fillStyle = "rgba(0, 0, 255, 1)"; // Water color overlay
      this.ctx.fillRect(this.x, this.y, this.imageSize, this.imageSize);
    }

    this.ctx.drawImage(
      this.image,
      this.x,
      this.y,
      this.imageSize,
      this.imageSize
    );

    if (this.isHovered) {
      console.log("Hovering " + this.id);
      if (this.id == 12 || this.id == 13 || this.id == 14)
        //Show as unchangeable square
        this.ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
      //Show as changeable square
      else this.ctx.fillStyle = "rgba(0, 0, 255, 0.5)";

      this.ctx.fillRect(this.x, this.y, this.imageSize, this.imageSize);
    }
  }

  calculateFillRect() {
    const progressRatio = this.fillLevel / 100;
    const mid = this.imageSize / 2;
    const thickness = 10; // Thickness of the water line

    switch (this.flowDirection) {
      case "up":
        return {
          x: mid - thickness / 2,
          y: this.imageSize * (1 - progressRatio),
          width: thickness,
          height: this.imageSize * progressRatio,
        };
      case "down":
        return {
          x: mid - thickness / 2,
          y: 0,
          width: thickness,
          height: this.imageSize * progressRatio,
        };
      case "left":
        return {
          x: this.imageSize * (1 - progressRatio),
          y: mid - thickness / 2,
          width: this.imageSize * progressRatio,
          height: thickness,
        };
      case "right":
        return {
          x: 0,
          y: mid - thickness / 2,
          width: this.imageSize * progressRatio,
          height: thickness,
        };
      default:
        return { x: 0, y: 0, width: this.imageSize, height: this.imageSize }; // Default: fill the whole pipe
    }
  }
}

// export default Pipe();

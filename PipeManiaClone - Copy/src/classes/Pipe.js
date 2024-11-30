class Pipe {
  constructor(x, y, imageSrc, imageSize) {
    this.x = x;
    this.y = y;
    this.imageSize = imageSize;
    this.image = new Image();
    this.image.src = imageSrc;
    this.isHovered = false;
    this.isValve = false;
    this.isEnd = false;
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
    if (this.isValve || this.isEnd || !this.isHovered) return;

    const randomPic = Math.floor(Math.random() * 10);
    this.image.src = `../images/${randomPic}.png`;
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.imageSize, this.imageSize);
    if (this.isHovered) {
      ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
      ctx.fillRect(this.x, this.y, this.imageSize, this.imageSize);
    }
  }
}

class Sprite {
  constructor({ position, size, imageSrc }) {
    this.position = position;
    this.size = size;
    this.image = new Image();
    this.image.onload = () => {
      this.loaded = true;
    };
    this.image.src = imageSrc;
    this.loaded = false;
  }

  draw() {
    if (!this.loaded) return;
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }
}

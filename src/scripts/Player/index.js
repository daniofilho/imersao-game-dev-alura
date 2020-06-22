class Player {
  constructor(props, gameConfig) {
    this.props = props;
    this.gameConfig = gameConfig;
    this.p5Vars = p5Vars;

    // Sprite
    this.sprite = new Sprite(
      props.imageFileWidth,
      props.imageFileHeight,
      props.spriteWidth,
      props.spriteHeight
    );
    this.frames = this.sprite.getFramesQuantity();
    this.actualFrameNumber = 1;

    this.spriteX = this.sprite.getFrame(this.actualFrameNumber).x;
    this.spriteY = this.sprite.getFrame(this.actualFrameNumber).y;
  }

  incrementFrameNumber() {
    let newFrameNumber = this.actualFrameNumber;
    newFrameNumber++;

    newFrameNumber = newFrameNumber >= this.frames ? 1 : newFrameNumber;

    this.actualFrameNumber = newFrameNumber;
  }

  animate() {
    const frame = this.sprite.getFrame(this.actualFrameNumber);

    this.spriteX = frame.x;
    this.spriteY = frame.y;

    this.incrementFrameNumber();
  }

  render() {
    const { image: playerImage, x, y, width, height, spriteWidth, spriteHeight } = this.props;

    image(playerImage, x, y, width, height, this.spriteX, this.spriteY, spriteWidth, spriteHeight);

    this.animate();
  }
}

function Animation(params, p5) {
  const { image, sprite, width, height, spriteWidth, spriteHeight } = params;

  let totalFrames = sprite.getFramesQuantity();
  let actualFrameNumber = 1;

  let spriteX = sprite.getFrame(actualFrameNumber).x;
  let spriteY = sprite.getFrame(actualFrameNumber).y;

  const incrementFrameNumber = () => {
    actualFrameNumber++;
    actualFrameNumber = actualFrameNumber >= totalFrames ? 1 : actualFrameNumber;
  };

  const animate = () => {
    const frame = sprite.getFrame(actualFrameNumber);

    spriteX = frame.x;
    spriteY = frame.y;

    incrementFrameNumber();
  };

  const render = (x, y) => {
    p5.image(image, x, y, width, height, spriteX, spriteY, spriteWidth, spriteHeight);

    animate();

    // Debug
    if (config.game.debug) {
      p5.noFill();
      p5.stroke(255, 204, 0);
      p5.rect(x, y, width, height);
    }
  };

  return {
    animate: render,
  };
}

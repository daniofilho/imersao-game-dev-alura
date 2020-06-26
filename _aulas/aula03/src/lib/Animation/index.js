function Animation(params, p5) {
  const { image, sprite, width, height, spriteWidth, spriteHeight, jumpFrames } = params;

  let totalFrames = sprite.getFramesQuantity();
  let actualFrameNumber = 1;

  let spriteX = sprite.getFrame(actualFrameNumber).x;
  let spriteY = sprite.getFrame(actualFrameNumber).y;

  const getNextFrameNumber = (num) => {
    let aux = num + 1;

    // check if need to jump frame
    if (jumpFrames.includes(aux)) {
      aux = getNextFrameNumber(aux);
    }

    aux = aux >= totalFrames ? 1 : aux;
    return aux;
  };

  const incrementFrameNumber = () => {
    actualFrameNumber = getNextFrameNumber(actualFrameNumber);
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
    if (game.debug) {
      p5.noFill();
      p5.stroke(255, 204, 0);
      p5.rect(x, y, width, height);
    }
  };

  return {
    animate: render,
  };
}

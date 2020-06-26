function Animation(params, p5) {
  let {
    image,
    sprite,
    width,
    height,
    spriteWidth,
    spriteHeight,
    jumpFrames,
    animationFPS,
  } = params;

  // Default values if not set
  jumpFrames = jumpFrames || [];
  animationFPS = animationFPS || 10;

  let totalFrames = sprite.getFramesQuantity();
  let actualFrameNumber = 1;
  let minFrameNumber = 0; // used to check if animation has changed

  let spriteX = sprite.getFrame(actualFrameNumber).x;
  let spriteY = sprite.getFrame(actualFrameNumber).y;

  let canRenderNextFrame = true;

  // Check if can handle next frame to control animatin FPS
  const handleCanRenderNextFrame = () => {
    canRenderNextFrame = false;
    setTimeout(() => {
      canRenderNextFrame = true;
    }, 1000 / animationFPS);
  };

  const getNextFrameNumber = (num, limit) => {
    let aux = num + 1;

    // will play specific frame range or every frames?
    if (limit) {
      // specifc
      aux = aux >= limit.max ? limit.min : aux;
    } else {
      // every frames
      // check if need to jump frame
      if (jumpFrames.includes(aux)) {
        aux = getNextFrameNumber(aux);
      }
      aux = aux >= totalFrames ? 1 : aux;
    }

    return aux;
  };

  const incrementFrameNumber = (limit) => {
    actualFrameNumber = getNextFrameNumber(actualFrameNumber, limit);
  };

  const animate = (limit) => {
    // Check if has a new animation
    if (limit && limit.min !== minFrameNumber) {
      minFrameNumber = limit.min;
      actualFrameNumber = limit.min;
    }

    const frame = sprite.getFrame(actualFrameNumber);

    spriteX = frame.x;
    spriteY = frame.y;

    if (canRenderNextFrame) incrementFrameNumber(limit);

    if (canRenderNextFrame) handleCanRenderNextFrame();
  };

  const render = (x, y, limit = false) => {
    p5.image(image, x, y, width, height, spriteX, spriteY, spriteWidth, spriteHeight);

    animate(limit);

    // Debug
    if (global.debug) {
      p5.noFill();
      p5.stroke(255, 204, 0);
      p5.rect(x, y, width, height);
    }
  };

  return {
    animate: render,
  };
}

function Enemy(props, p5) {
  let {
    image,
    config: {
      x,
      y,
      speed,
      width,
      height,
      hitboxWidthMultiplier,
      hitboxHeightMultiplier,
      spriteWidth,
      spriteHeight,
      imageFileWidth,
      imageFileHeight,
      respawnDelay,
      jumpFrames,
    },
  } = props;

  // Enemies start on right side of screen and on ground
  y = p5.height - height - y;
  x = p5.width - width - x + respawnDelay;

  // Calculate hitbox
  let hitboxWidth = width * hitboxWidthMultiplier;
  let hitboxHeight = height * hitboxHeightMultiplier;

  // Sprite
  const sprite = Sprite(imageFileWidth, imageFileHeight, spriteWidth, spriteHeight);

  const enemyAnimation = Animation(
    {
      image,
      sprite,
      width,
      height,
      spriteWidth,
      spriteHeight,
      jumpFrames,
    },
    p5
  );

  const getX = () => {
    return x;
  };
  const getY = () => {
    return y;
  };

  const getHitboxX = () => {
    return x + (width - hitboxWidth) / 2;
  };
  const getHitboxY = () => {
    return y + height - hitboxHeight;
  };

  const getHitboxWidth = () => {
    return hitboxWidth;
  };
  const getHitboxHeight = () => {
    return hitboxHeight;
  };

  const getProp = (prop) => {
    return props.config[prop];
  };

  const move = () => {
    x = x - speed;
    if (x < -p5.width) {
      x = p5.width + respawnDelay;
    }
  };

  const render = () => {
    move();
    enemyAnimation.animate(x, y);

    // Debug hitbox
    if (game.debug) {
      p5.noFill();
      p5.stroke(255, 0, 0);
      p5.rect(getHitboxX(), getHitboxY(), hitboxWidth, hitboxHeight);
    }
  };

  return {
    render,
    getX,
    getY,
    getProp,
    getHitboxX,
    getHitboxY,
    getHitboxWidth,
    getHitboxHeight,
  };
}

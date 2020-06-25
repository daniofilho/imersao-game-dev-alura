function Item(props, p5) {
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
      animation,
      animationFPS,
    },
  } = props;

  // Enemies start on right side of screen and on ground
  const x0 = config.game.width - width - x + respawnDelay[0];
  const y0 = config.game.height - height - y;

  x = x0;
  y = y0;

  // Calculate hitbox
  let hitboxWidth = width * hitboxWidthMultiplier;
  let hitboxHeight = height * hitboxHeightMultiplier;

  // Sprite
  const sprite = Sprite(imageFileWidth, imageFileHeight, spriteWidth, spriteHeight);

  const params = {
    image,
    sprite,
    width,
    height,
    spriteWidth,
    spriteHeight,
    animationFPS,
    jumpFrames,
  };

  const enemyAnimation = Animation(params, p5);

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

  const reset = () => {
    // Any y on screen
    y = Math.floor(Math.random() * config.game.height) + 50;

    const random = Math.floor(Math.random() * respawnDelay[1]) + respawnDelay[0];
    x = config.game.width + random;
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

    if (x < -width) reset();
  };

  const render = () => {
    move();
    enemyAnimation.animate(x, y, animation || false);

    // Debug hitbox
    if (global.debug) {
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
    reset,
  };
}

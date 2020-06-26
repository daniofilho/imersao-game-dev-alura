function Enemy(props, p5) {
  let {
    image,
    config: {
      x,
      y,
      speed,
      width,
      height,
      spriteWidth,
      spriteHeight,
      imageFileWidth,
      imageFileHeight,
    },
  } = props;

  // Enemies start on right side of screen and on ground
  y = p5.height - height - y;
  x = p5.width - width - x;

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
    },
    p5
  );

  const getX = () => {
    return x;
  };
  const getY = () => {
    return y;
  };
  const getProp = (prop) => {
    return props.config[prop];
  };

  const move = () => {
    x = x - speed;
    if (x < -p5.width) {
      x = p5.width;
    }
  };

  const render = () => {
    move();
    enemyAnimation.animate(x, y);
  };

  return {
    render,
    getX,
    getY,
    getProp,
  };
}

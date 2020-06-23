function Player(props, p5) {
  let {
    image,
    config: {
      x,
      y,
      width,
      height,
      hitboxWidthMultiplier,
      hitboxHeightMultiplier,
      spriteWidth,
      spriteHeight,
      imageFileWidth,
      imageFileHeight,
      jumpSpeed,
      jumpLimit,
    },
  } = props;

  const x0 = x;

  // Put player on the ground
  y = p5.height - height - y;

  // Calculate hitbox
  hitboxWidth = width * hitboxWidthMultiplier;
  hitboxHeight = height * hitboxHeightMultiplier;

  let jumpVelocity = 0;
  let y0 = y;

  // Sprite
  const sprite = Sprite(imageFileWidth, imageFileHeight, spriteWidth, spriteHeight);

  const playerAnimation = Animation(
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

  // Player simples movement
  let moveForwards = true;
  const moveRange = 20;
  let jumps = 0;

  // Move player front and back random, so it will be less static
  const animate = () => {
    playerAnimation.animate(x, y);

    // Move front and back
    const r_number = Math.floor(Math.random() * 2) + 1;
    x = moveForwards ? x + r_number : x - r_number;

    // Check if passed limits and change direction
    if (x > x0 + moveRange) moveForwards = false;
    if (x < x0 - moveRange) moveForwards = true;
  };

  const applyGravity = () => {
    y += jumpVelocity;
    jumpVelocity += config.game.gravity;

    if (y > y0) {
      // limit player on ground
      y = y0;
      // reset jumps
      jumps = 0;
    }
  };

  const jump = () => {
    // Remove jump instruction
    document.getElementById('instructions').style.display = 'none';

    // check jump limit before jumpings
    if (jumps >= jumpLimit) return;

    // Sound
    if (config.game.sound) props.jumpSound.play();

    // Logic
    jumps++;
    jumpVelocity = -jumpSpeed;
  };

  const handleKeyPressed = (key) => {
    // Space
    if (key === ' ') {
      jump();
    }
  };

  const isColliding = (enemy) => {
    return p5.collideRectRect(
      x + (width - hitboxWidth) / 2,
      y + height - hitboxHeight,
      hitboxWidth,
      hitboxHeight,
      enemy.getX(),
      enemy.getY(),
      enemy.getProp('width'),
      enemy.getProp('height')
    );
  };

  const render = () => {
    animate();

    applyGravity();
    // Debug player hitbox
    if (config.game.debug) {
      p5.noFill();
      p5.stroke(255, 0, 0);
      p5.rect(x + (width - hitboxWidth) / 2, y + height - hitboxHeight, hitboxWidth, hitboxHeight);
    }
  };

  return {
    render,
    handleKeyPressed,
    isColliding,
  };
}

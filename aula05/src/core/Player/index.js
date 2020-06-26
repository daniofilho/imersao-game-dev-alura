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
      animationFPS,
      jumpSpeed,
      jumpLimit,
      animations,
      moveRange,
      moveSpeed,
    },
  } = props;

  let isHurt = false;
  let hurtBlink = false;

  // Put player on the ground
  y = config.game.height - height - y;

  // Calculate hitbox

  let hitboxWidth = width * hitboxWidthMultiplier;
  let hitboxHeight = height * hitboxHeightMultiplier;

  let jumpVelocity = 0;
  let jumps = 0;
  let jumping = false;
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
      animationFPS,
    },
    p5
  );

  const getHitboxX = () => {
    return x + (width - hitboxWidth) / 2;
  };
  const getHitboxY = () => {
    return y + height - hitboxHeight;
  };

  // Animate player
  const animate = () => {
    const limitFrames = jumping ? animations.jump : animations.walk;
    playerAnimation.animate(x, y, limitFrames);
  };

  const applyGravity = () => {
    y += jumpVelocity;
    jumpVelocity += config.game.gravity;

    if (y > y0) {
      // limit player on ground
      y = y0;
      // reset jumps
      jumps = 0;
      jumping = false;
    }
  };

  const jump = () => {
    // check jump limit before jumpings
    if (jumps >= jumpLimit) return;

    jumping = true;

    // Sound
    if (config.game.sound) props.jumpSound.play();

    // Logic
    jumps++;
    jumpVelocity = -jumpSpeed;
  };

  const moveRight = () => {
    x += moveSpeed;
    if (x > moveRange.max) x = moveRange.max;
  };

  const moveLeft = () => {
    x -= moveSpeed;
    if (x < -moveRange.min) x = -moveRange.min;
  };

  const handleKeyPressed = (key) => {
    if (key === 'ArrowUp') jump();
  };
  const handleKeyDown = () => {
    if (p5.keyIsDown(p5.RIGHT_ARROW)) moveRight();
    if (p5.keyIsDown(p5.LEFT_ARROW)) moveLeft();
  };

  const hurt = () => {
    // Sound
    if (config.game.sound) props.hurtSound.play();

    // Blink animation
    isHurt = true;
    setTimeout(() => {
      isHurt = false;
      hurtBlink = false;
    }, 2000);
  };

  const isColliding = (enemies, callback) => {
    enemies.map((e) => {
      enemy = e.instance;
      if (
        p5.collideRectRect(
          getHitboxX(),
          getHitboxY(),
          hitboxWidth,
          hitboxHeight,
          enemy.getX(),
          enemy.getY(),
          enemy.getHitboxWidth(),
          enemy.getHitboxHeight()
        )
      ) {
        const collide_response = enemy.onCollide(() => callback());

        if (collide_response === 'hurt') hurt();

        if (global.debug) {
          console.log(`Collided with ${enemy.getProp('name')}`);
        }
      }
    });
    return;
  };

  const render = () => {
    // Make player blink when got hurt
    if (isHurt) hurtBlink = !hurtBlink;

    if (!hurtBlink) animate();

    handleKeyDown();

    applyGravity();

    // Debug player hitbox
    if (global.debug) {
      p5.noFill();
      p5.stroke(255, 0, 0);
      p5.rect(getHitboxX(), getHitboxY(), hitboxWidth, hitboxHeight);
    }
  };

  return {
    render,
    handleKeyPressed,
    isColliding,
  };
}

function Scenario(props, p5) {
  const gameConfig = config.game;

  // First image starts at position 0
  let bg01_x = 0;
  // Second image start at -100%, so images will be side by side
  let bg02_x = p5.width; // canvas width

  // Soundtrack
  if (gameConfig.sound) props.sound.loop();

  // Move backgorund to have an inifinite background effect
  const animateBackground = () => {
    bg01_x -= gameConfig.speed;
    bg02_x -= gameConfig.speed;

    // If on width limit, reset position
    if (bg01_x < -p5.width) bg01_x = p5.width;
    if (bg02_x < -p5.width) bg02_x = p5.width;
  };

  const render = () => {
    // Images side by side
    p5.image(props.image, bg01_x, 0, p5.width, p5.height);
    p5.image(props.image, bg02_x, 0, p5.width, p5.height);

    animateBackground();
  };

  return {
    render,
  };
}

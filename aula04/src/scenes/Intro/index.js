function Intro(p5) {
  let introBackground;
  let introLogo;

  const centerX = config.game.width / 2;
  const centerY = config.game.height / 2;

  const { logoWidth, logoHeight } = config.scenes.intro;

  const buttonBeginCallback = (button) => {
    global.scene = 'level1';
    button.remove();
  };
  let buttonBegin = new Button(p5, 'START', centerX - 150, centerY + 90, 'btn-begin', (button) =>
    buttonBeginCallback(button)
  );

  const drawSlogan = () => {
    const sloganX = centerX - logoWidth / 2;
    const sloganY = centerY - logoHeight / 2;

    p5.fill('#8E2DA6');
    p5.textFont(global.font);
    p5.textAlign(p5.LEFT);
    p5.textSize(16);
    p5.text('endless runner edition', sloganX + 125, sloganY + 190);
  };

  const preload = () => {
    introBackground = p5.loadImage(config.scenes.intro.background);
    introLogo = p5.loadImage(config.scenes.intro.logo);
  };
  const setup = () => {};
  const keyPressed = () => {};
  const draw = () => {
    // Background and overlay
    p5.image(introBackground, 0, 0, config.game.width, config.game.height);
    p5.fill('rgba(0,0,0, 0.85)');
    p5.rect(0, 0, config.game.width, config.game.height);

    // Logo
    const logoX = centerX - logoWidth / 2;
    const logoY = centerY - logoHeight / 2;
    p5.image(introLogo, logoX, logoY, logoWidth, logoHeight);

    drawSlogan();

    buttonBegin.render();
  };

  return {
    preload,
    setup,
    keyPressed,
    draw,
  };
}

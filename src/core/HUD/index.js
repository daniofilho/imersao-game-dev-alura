function HUD(props, p5) {
  const { lifeImage } = props;

  const draw = (text, x, y) => {
    p5.fill('#FFF');
    p5.textFont(global.font);
    p5.textAlign(p5.RIGHT);
    p5.textSize(20);
    p5.text(text, x, y);
  };

  const drawScore = () => {
    draw(`SCORE: ${parseInt(global.score, 10)}`, config.game.width - 20, 40);
    global.score += 0.2;
  };

  const drawLife = () => {
    // using this loop for performance reasons
    new Array(global.lifes).fill('').forEach((_, index) => {
      p5.image(lifeImage, config.game.width - 50 * (index + 1), 60, 30, 30);
      1;
    });
  };

  const reset = () => {
    global.score = 0;
  };

  const render = () => {
    if (!global.paused) {
      drawScore();
      drawLife();
    }
  };

  return {
    render,
    reset,
  };
}

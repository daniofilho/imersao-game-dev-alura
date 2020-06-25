function Score(p5) {
  const draw = (text, x, y) => {
    p5.fill('#FFF');
    p5.textFont(global.font);
    p5.textAlign(p5.RIGHT);
    p5.textSize(20);
    p5.text(text, x, y);
  };

  const reset = () => {
    global.score = 0;
  };

  const render = () => {
    if (!global.paused) {
      draw(`SCORE: ${parseInt(global.score, 10)}`, config.game.width - 20, 40);

      global.score += 0.2;
    }
  };

  return {
    render,
    reset,
  };
}

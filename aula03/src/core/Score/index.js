function Score(p5) {
  let score = 0;

  const draw = (text, x, y) => {
    p5.fill('#FFF');
    p5.textFont(game.font);
    p5.textAlign(p5.RIGHT);
    p5.textSize(30);
    p5.text(text, x, y);
  };

  const drawGameOverScore = () => {
    draw(parseInt(score, 10), p5.width / 2, p5.height / 2 + 80);
  };

  const render = () => {
    if (!game.paused) {
      draw(`SCORE: ${parseInt(score, 10)}`, p5.width - 20, 40);

      score += 0.2;
    }
  };

  return {
    render,
    drawGameOverScore,
  };
}

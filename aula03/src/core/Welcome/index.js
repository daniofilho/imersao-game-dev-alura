function Welcome(p5) {
  const draw = (text, x, y) => {
    p5.fill('#FFF');
    p5.textFont(game.font);
    p5.textAlign(p5.RIGHT);
    p5.textSize(30);
    p5.text(text, x, y);
  };

  const render = () => {
    draw(`PRESS SPACE TO JUMP`, p5.width / 2 + 100, 100);
  };

  return {
    render,
  };
}

function Welcome(p5) {
  let blink = false;

  const draw = (text, x, y) => {
    p5.fill('#FFF');
    p5.textFont(global.font);
    p5.textAlign(p5.CENTER);
    p5.textSize(20);
    p5.text(text, x, y);
  };

  const doBlink = () => {
    if (!blink) {
      setTimeout(() => {
        blink = true;
      }, 500);
    } else {
      setTimeout(() => {
        blink = false;
      }, 500);
    }
  };

  const render = () => {
    draw(`USE ARROW KEYS TO MOVE AND JUMP`, config.game.width / 2, 80);
    if (!blink) draw(`PRESS SPACE TO START`, config.game.width / 2, 150);

    doBlink();
  };

  return {
    render,
  };
}

function GameOver(image, p5) {
  const render = (score) => {
    // Stop loop
    p5.noLoop();

    // Transparent overlay
    p5.fill('rgba(0,0,0, 0.5)');
    p5.rect(0, 0, config.game.width, config.game.height);

    // Draw Game Over screen
    p5.image(
      image,
      config.game.width / 2 - config.game.gameOverWidth / 2,
      config.game.height / 2 - config.game.gameOverHeight / 2,
      config.game.gameOverWidth,
      config.game.gameOverHeight
    );

    // draw score
    p5.fill('#FFF');
    p5.textAlign(p5.CENTER);
    p5.text('PRESS SPACE TO RETRY', config.game.width / 2, config.game.height / 2 + 130);
  };

  return { render };
}

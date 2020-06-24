function Scenario(props, p5) {
  const gameConfig = config.game;

  const layers = [];

  const limitWidth = p5.width;

  props.layers.map((layer) => {
    layers.push({
      image: layer,
      x1: 0,
      x2: limitWidth,
    });
  });

  // Soundtrack
  if (gameConfig.sound) props.sound.loop();

  // Move backgorund to have an inifinite background effect
  const parallaxBackground = () => {
    layers.map((layer, index) => {
      const speed = gameConfig.speed + index;
      layer.x1 -= speed;
      layer.x2 -= speed;

      // If on width limit, reset position
      if (layer.x1 < -p5.width) layer.x1 = p5.width - 10;
      if (layer.x2 < -p5.width) layer.x2 = p5.width - 10;
      // @TODO: for some reason there is a margin applied on screen.
      // the -10 values avoids an error showing a blank space between layers
    });
  };

  const render = () => {
    layers.map((layer) => {
      p5.image(layer.image, layer.x1, 0, limitWidth, p5.height);
      p5.image(layer.image, layer.x2, 0, limitWidth, p5.height);
    });

    parallaxBackground();
  };

  return {
    render,
  };
}

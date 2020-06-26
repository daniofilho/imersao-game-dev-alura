function run(p5) {
  let scenes = {
    intro: new Intro(p5),
    level1: new Level1(p5),
  };

  let player = {
    config: config.player,
  };

  const getScene = (param) => {
    switch (param) {
      default:
      case 'intro':
        return scenes.intro;
      case 'level1':
        return scenes.level1;
    }
  };

  // Preload assets
  p5.preload = () => {
    // Fonts
    global.font = p5.loadFont(config.game.font);

    // Player
    player.image = p5.loadImage(player.config.imageFile);
    player.jumpSound = p5.loadSound(player.config.jumpSoundFile);
    player.hurtSound = p5.loadSound(player.config.hurtSoundFile);

    // Scenes
    scenes.intro.preload();
    scenes.level1.preload();
  };

  // P5 setup
  p5.setup = () => {
    // FPS
    p5.frameRate(config.game.fps);

    // Start Canvas
    p5.createCanvas(config.game.width, config.game.height);

    // Player
    player.instance = Player(player, p5);

    // Scene
    scenes.intro.setup();
    scenes.level1.setup();

    // Everything loaded, now show screen
    document.getElementsByTagName('body')[0].style.opacity = 1;
  };

  // P5 - On Keypres
  p5.keyPressed = () => {
    // Scene
    getScene(global.scene).keyPressed(player);
  };

  // P5 - Game Loop
  p5.draw = () => {
    // Scene
    getScene(global.scene).draw(player);
  };
}
new p5(run);

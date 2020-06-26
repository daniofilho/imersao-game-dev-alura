function run(p5) {
  let scenario = {
    config: config.scenario,
  };
  let player = {
    config: config.player,
  };
  let enemyDrop = {
    config: config.enemyDrop,
  };

  let gameOverScreen;

  const gameOver = () => {
    p5.noLoop();
    p5.image(gameOverScreen, 0, 0, p5.windowWidth, p5.windowHeight);
    document.getElementById('instructions').style.display = 'none';
    scenario.sound.pause();
  };

  // Preload assets
  p5.preload = () => {
    gameOverScreen = p5.loadImage(config.game.gameOverScreen);

    // Scenario
    scenario.image = p5.loadImage(scenario.config.imageFile);
    scenario.sound = p5.loadSound(scenario.config.soundFile);

    // Player
    player.image = p5.loadImage(player.config.imageFile);
    player.jumpSound = p5.loadSound(player.config.jumpSoundFile);

    // Enemies
    enemyDrop.image = p5.loadImage(enemyDrop.config.imageFile);
  };

  // P5 setup
  p5.setup = () => {
    // FPS
    p5.frameRate(config.game.fps);

    // Start Canvas
    p5.createCanvas(p5.windowWidth, p5.windowHeight);

    // Scenario
    scenario.instance = Scenario(scenario, p5);

    // Player
    player.instance = Player(player, p5);

    // Enemies
    enemyDrop.instance = Enemy(enemyDrop, p5);
  };

  // P5 - On Keypres
  p5.keyPressed = () => {
    player.instance.handleKeyPressed(p5.key);
  };

  // P5 - Game Loop
  p5.draw = () => {
    // Scenario
    scenario.instance.render();

    // Player
    player.instance.render();

    // Enemies
    enemyDrop.instance.render();

    // Check if player is colliding
    // # with Drop
    if (player.instance.isColliding(enemyDrop.instance)) {
      gameOver();
    }
  };
}
new p5(run);

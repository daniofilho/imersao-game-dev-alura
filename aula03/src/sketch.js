function run(p5) {
  let scenario = {
    config: config.scenario,
  };
  let player = {
    config: config.player,
  };
  let enemies = [
    {
      config: config.enemyDrop,
    },
    {
      config: config.enemyTroll,
    },
    {
      config: config.enemyFlyingDrop,
    },
  ];

  let score = new Score(p5);
  let welcome = new Welcome(p5);

  let gameOverScreen;

  const gameOver = () => {
    // Stop loop
    p5.noLoop();

    // Draw background
    scenario.instance.render();

    // Draw Game Over screen
    p5.image(
      gameOverScreen,
      p5.width / 2 - config.game.gameOverWidth / 2,
      p5.height / 2 - config.game.gameOverHeight / 2,
      config.game.gameOverWidth,
      config.game.gameOverHeight
    );

    // draw score
    score.drawGameOverScore();

    // Stop sound
    scenario.sound.pause();
  };

  // Preload assets
  p5.preload = () => {
    gameOverScreen = p5.loadImage(config.game.gameOverScreen);

    // Fonts
    game.font = p5.loadFont(config.game.font);

    // Scenario
    scenario.layers = [];
    scenario.config.backgroundLayers.map((layer) => {
      scenario.layers.push(p5.loadImage(layer));
    });
    scenario.sound = p5.loadSound(scenario.config.soundFile);

    // Player
    player.image = p5.loadImage(player.config.imageFile);
    player.jumpSound = p5.loadSound(player.config.jumpSoundFile);

    // Enemies
    enemies.map((enemy) => {
      enemy.image = p5.loadImage(enemy.config.imageFile);
    });
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
    enemies.map((enemy) => {
      enemy.instance = Enemy(enemy, p5);
    });
  };

  // P5 - On Keypres
  p5.keyPressed = () => {
    // On first jump, make the game starts
    if (p5.key === ' ' && game.paused) {
      game.paused = false;
    }

    // Player handle key pressed
    player.instance.handleKeyPressed(p5.key);
  };

  // P5 - Game Loop
  p5.draw = () => {
    // Scenario
    scenario.instance.render();

    // Score
    score.render();

    // Player
    player.instance.render();

    if (game.paused) welcome.render();

    if (game.paused) return;

    // Enemies
    enemies.map((enemy) => {
      enemy.instance.render();
    });

    // Check if player is colliding
    // # with Drop
    if (player.instance.isColliding(enemies, () => gameOver()));
  };
}
new p5(run);

function Level1(p5) {
  const scenario = {
    config: config.scenes.level1,
    actualEnemy: 0,
  };

  const coin = {
    config: config.coin,
    onCollide: (_coin) => {
      if (config.game.sound) _coin.sound.play();
    },
  };

  let welcome = new Welcome(p5);

  // Repeating enemies to make them more likely to appear
  const enemies = [
    { config: config.enemyGround },
    { config: config.enemyGround },
    { config: config.enemyFlying },
    { config: config.enemyBig },
    { config: config.enemyGround },
    { config: config.enemyFlying },
  ];

  const score = new Score(p5);

  const scenes = {
    gameOver: null,
  };

  let gameOverScreen;

  const restart = () => {
    global.paused = false;
    score.reset();
    enemies[scenario.actualEnemy].instance.reset();
    p5.loop();
  };

  // Preload assets
  const preload = () => {
    // Game over
    gameOverScreen = p5.loadImage(config.game.gameOverScreen);
    scenes.gameOver = new GameOver(gameOverScreen, p5);

    // Scenario
    scenario.layers = [];
    scenario.config.backgroundLayers.map((layer) => {
      scenario.layers.push(p5.loadImage(layer));
    });
    scenario.sound = p5.loadSound(scenario.config.soundFile);

    // Coin
    coin.image = p5.loadImage(coin.config.imageFile);
    coin.sound = p5.loadSound(coin.config.sound);

    // Enemies
    enemies.map((enemy) => {
      enemy.image = p5.loadImage(enemy.config.imageFile);
    });
  };

  // P5 setup
  const setup = () => {
    // Scenario
    scenario.instance = Scenario(scenario, p5);

    // Enemies
    enemies.map((enemy) => {
      enemy.instance = Enemy(enemy, p5);
    });

    coin.instance = Item(coin, p5);
  };

  // P5 - On Keypres
  const keyPressed = (player) => {
    // On first jump, make the game starts
    if (p5.key === ' ' && global.paused) {
      global.paused = false;
    }

    // If game is paused (game over), restart
    if (p5.key === ' ' && !global.paused) {
      restart();
    }

    // Player handle key pressed
    player.instance.handleKeyPressed(p5.key);
  };

  // P5 - Game Loop
  const draw = (player) => {
    // Scenario
    scenario.instance.render();

    // Score
    score.render();

    // Player
    player.instance.render();

    // Check pause
    if (global.paused) welcome.render();
    if (global.paused) return;

    // Coin
    coin.instance.render();

    // Enemies - only one at the time, random
    const enemy = enemies[scenario.actualEnemy].instance;
    enemy.render();

    // Check if enemy is out of range to show another
    if (enemy.getX() < -enemy.getProp('width')) {
      // pick another randomly and reset its position
      scenario.actualEnemy = Math.floor(Math.random() * enemies.length);
      // reset enemy position
      enemies[scenario.actualEnemy].instance.reset();
    }

    // Check if player is colliding with enemies
    if (player.instance.isColliding(enemies, () => scenes.gameOver.render()));

    // Check if player is colligin with an item
    if (
      player.instance.isColliding([coin], () => {
        coin.onCollide(coin);
        coin.instance.reset();
        global.score += 20;
      })
    );
  };

  return {
    preload,
    setup,
    keyPressed,
    draw,
  };
}

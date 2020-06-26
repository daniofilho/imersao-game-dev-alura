function Level1(p5) {
  const scenario = {
    config: config.scenes.level1,
    actualEnemy: 0,
  };

  const hud = {};

  // Items
  const coin = {
    config: config.coin,
  };
  const life = {
    config: config.life,
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

  const scenes = {
    gameOver: null,
  };

  let gameOverScreen;

  const restart = () => {
    global.paused = false;
    hud.instance.reset();
    coin.instance.reset();
    life.instance.reset();
    global.lifes = config.game.maxLifes;
    enemies.map((enemy) => {
      enemy.instance.resetSpeed();
      enemy.instance.reset();
    });
    p5.loop();
  };

  // Preload assets
  const preload = () => {
    // Game over
    gameOverScreen = p5.loadImage(config.game.gameOverScreen);
    scenes.gameOver = new GameOver(gameOverScreen, p5);

    // HUD
    hud.lifeImage = p5.loadImage(config.game.lifeImage);

    // Scenario
    scenario.layers = [];
    scenario.config.backgroundLayers.map((layer) => {
      scenario.layers.push(p5.loadImage(layer));
    });
    scenario.sound = p5.loadSound(scenario.config.soundFile);

    // Coin
    coin.image = p5.loadImage(coin.config.imageFile);
    coin.sound = p5.loadSound(coin.config.sound);

    // Life
    life.image = p5.loadImage(life.config.imageFile);
    life.sound = p5.loadSound(life.config.sound);

    // Enemies
    enemies.map((enemy) => {
      enemy.image = p5.loadImage(enemy.config.imageFile);
    });
  };

  // P5 setup
  const setup = () => {
    // Scenario
    scenario.instance = Scenario(scenario, p5);

    // HUD
    hud.instance = HUD(hud, p5);

    // Enemies
    enemies.map((enemy) => {
      enemy.instance = Enemy(enemy, p5);
    });

    // Items
    coin.item = Item(coin, p5);
    coin.instance = Coin(coin, p5);
    life.item = Item(life, p5);
    life.instance = Life(life, p5);
  };

  // P5 - On Keypres
  const keyPressed = (player) => {
    // On first jump, make the game starts
    if (p5.key === ' ' && global.paused) {
      global.paused = false;
    }

    // If game is paused (game over), restart
    if (p5.key === ' ' && !global.paused && global.lifes <= 0) {
      restart();
    }

    // Player handle key pressed
    player.instance.handleKeyPressed(p5.key);
  };

  // P5 - Game Loop
  const draw = (player) => {
    // Scenario
    scenario.instance.render();

    // HUD
    hud.instance.render();

    // Player
    player.instance.render();

    // Check pause
    if (global.paused) welcome.render();
    if (global.paused) return;

    // Coin
    coin.instance.render();
    life.instance.render();

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
    if (player.instance.isColliding([coin, life], () => {}));
  };

  return {
    preload,
    setup,
    keyPressed,
    draw,
  };
}

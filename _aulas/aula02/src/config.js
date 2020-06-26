const config = {
  // # Game
  game: {
    debug: false,
    fps: 30,
    speed: 15,
    sound: true,
    gravity: 5,
    gameOverScreen: 'assets/images/game-over.jpg',
  },
  // # Scenario
  scenario: {
    imageFile: 'assets/images/scenario/forest.png',
    soundFile: 'assets/sounds/soundtrack.mp3',
  },
  // # Player
  player: {
    imageFile: 'assets/images/player/running.png',
    imageFileWidth: 880,
    imageFileHeight: 1080,
    jumpSoundFile: 'assets/sounds/jump.mp3',
    x: 60,
    y: 10,
    width: 110,
    height: 135,
    hitboxWidthMultiplier: 0.7,
    hitboxHeightMultiplier: 0.8,
    spriteX0: 0,
    spriteY0: 0,
    spriteWidth: 220,
    spriteHeight: 270,
    jumpSpeed: 40,
    jumpLimit: 2,
  },
  // # Enemies
  enemyDrop: {
    imageFile: 'assets/images/enemies/drop.png',
    imageFileWidth: 416,
    imageFileHeight: 728,
    x: 20,
    y: 10,
    width: 52,
    height: 52,
    spriteX0: 0,
    spriteY0: 0,
    spriteWidth: 104,
    spriteHeight: 104,
    speed: 20,
  },
  enemyFlyingDrop: {
    imageFile: 'assets/images/enemies/flying-drop.png',
    imageFileWidth: 600,
    imageFileHeight: 900,
    x: 20,
    y: 200,
    width: 52,
    height: 52,
    spriteX0: 0,
    spriteY0: 0,
    spriteWidth: 104, // ??
    spriteHeight: 104, // ??
    speed: 15,
  },
  enemyTroll: {
    imageFile: 'assets/images/enemies/troll.png',
    imageFileWidth: 2000,
    imageFileHeight: 2400,
    x: 20,
    y: 10,
    width: 80,
    height: 80,
    spriteX0: 0,
    spriteY0: 0,
    spriteWidth: 104, // ??
    spriteHeight: 104, // ??
    speed: 5,
  },
};

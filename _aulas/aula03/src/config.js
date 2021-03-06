const game = { paused: true, font: null };
const config = {
  // # Game
  game: {
    font: 'assets/fonts/initial-screen-font.otf',
    debug: false,
    fps: 40,
    speed: 5,
    sound: false,
    gravity: 8,
    gameOverScreen: 'assets/images/game-over.png',
    gameOverWidth: 412,
    gameOverHeight: 78,
  },
  // # Scenario
  scenario: {
    imageFile: 'assets/images/scenario/forest.png',
    backgroundLayers: [
      'assets/images/scenario/demon-woods-bg.png',
      'assets/images/scenario/demon-woods-far-trees.png',
      'assets/images/scenario/demon-woods-mid-trees.png',
      'assets/images/scenario/demon-woods-close-trees.png',
    ],
    soundFile: 'assets/sounds/soundtrack.mp3',
  },
  // # Player
  player: {
    imageFile: 'assets/images/player/running.png',
    imageFileWidth: 880,
    imageFileHeight: 1080,
    jumpSoundFile: 'assets/sounds/jump.mp3',
    x: 40,
    y: 30,
    width: 110,
    height: 135,
    hitboxWidthMultiplier: 0.7,
    hitboxHeightMultiplier: 0.8,
    spriteX0: 0,
    spriteY0: 0,
    spriteWidth: 220,
    spriteHeight: 270,
    jumpSpeed: 60,
    jumpLimit: 2,
    jumpFrames: [],
  },
  // # Enemies
  enemyDrop: {
    name: 'Drop',
    imageFile: 'assets/images/enemies/drop.png',
    imageFileWidth: 416,
    imageFileHeight: 728,
    x: 20,
    y: 30,
    width: 52,
    height: 52,
    hitboxWidthMultiplier: 0.9,
    hitboxHeightMultiplier: 0.9,
    spriteX0: 0,
    spriteY0: 0,
    spriteWidth: 104,
    spriteHeight: 104,
    speed: 20,
    respawnDelay: 1000,
    jumpFrames: [],
  },
  enemyFlyingDrop: {
    name: 'Flying Drop',
    imageFile: 'assets/images/enemies/flying-drop.png',
    imageFileWidth: 600,
    imageFileHeight: 900,
    x: 20,
    y: 200,
    width: 52,
    height: 52,
    hitboxWidthMultiplier: 0.7,
    hitboxHeightMultiplier: 0.8,
    spriteX0: 0,
    spriteY0: 0,
    spriteWidth: 200, // ??
    spriteHeight: 150, // ??
    speed: 15,
    respawnDelay: 100,
    jumpFrames: [17, 18],
  },
  enemyTroll: {
    name: 'Troll',
    imageFile: 'assets/images/enemies/troll.png',
    imageFileWidth: 2000,
    imageFileHeight: 2400,
    x: 20,
    y: 30,
    width: 200,
    height: 200,
    hitboxWidthMultiplier: 0.5,
    hitboxHeightMultiplier: 0.5,
    spriteX0: 0,
    spriteY0: 0,
    spriteWidth: 400,
    spriteHeight: 400,
    speed: 25,
    respawnDelay: 9000,
    jumpFrames: [29, 30], // Frames that doesn't exist on image file
  },
};

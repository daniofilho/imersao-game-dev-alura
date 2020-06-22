// Função do P5 usado para preload de assets
function preload() {
  // Cenário
  scenario.image = loadImage(scenario.imageFile);
  scenario.sound = loadSound(scenario.soundFile);

  // Personagem
  player.image = loadImage(player.imageFile);
}

// Função padrão de setup do P5
// Executada 1 vez antes do jogo iniciar
function setup() {
  // FPS
  frameRate(gameConfig.fps);

  // Starta o Canvas
  createCanvas(windowWidth, windowHeight);

  p5Vars = {
    windowWidth,
    windowHeight,
    width,
    height,
  };

  // Cenário
  scenario.instance = new Scenario(scenario, gameConfig, p5Vars);

  // Personagem
  player.instance = new Player(player, gameConfig, p5Vars);
}

// Game Loop do P5
function draw() {
  // Cenário
  scenario.instance.render();

  // Personagem
  player.instance.render();
}

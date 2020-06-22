var p5Vars = {};

var gameConfig = {
  fps: 30,
  speed: 5,
  sound: false,
};

var scenario = {
  imageFile: 'assets/imagens/cenario/floresta.png',
  soundFile: 'assets/sons/trilha_jogo.mp3',
  instance: null,
};

var player = {
  imageFile: 'assets/imagens/personagem/correndo.png',
  imageFileWidth: 880,
  imageFileHeight: 1080,
  x: 0,
  y: document.body.scrollHeight - 135,
  width: 110,
  height: 135,
  spriteX0: 0, // coordenada inicial do sprite
  spriteY0: 0,
  spriteWidth: 220, // Tamanho do sprite
  spriteHeight: 270,
  instance: null, // guardará a classe do player
};

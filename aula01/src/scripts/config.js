var p5Vars = {};

var gameConfig = {
  fps: 30,
  speed: 5,
  sound: true,
};

var scenario = {
  imageFile: 'assets/imagens/cenario/floresta.png',
  soundFile: 'assets/sons/trilha_jogo.mp3',
  instance: null, // will store scenario instance
};

const playerHeight = 135;
var player = {
  imageFile: 'assets/imagens/personagem/correndo.png',
  imageFileWidth: 880,
  imageFileHeight: 1080,
  x: 20,
  y: document.body.scrollHeight - playerHeight - 20, // 20 = padding
  width: 110,
  height: playerHeight,
  spriteX0: 0,
  spriteY0: 0,
  spriteWidth: 220,
  spriteHeight: 270,
  instance: null, // will store player instance
};

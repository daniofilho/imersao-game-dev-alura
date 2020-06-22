class Scenario {
  constructor(props, gameConfig, p5Vars) {
    this.props = props;
    this.gameConfig = gameConfig;
    this.p5Vars = p5Vars;

    // A primeira imagem começa na posição 0
    this.bg01_x = 0;
    // A segunda imagem começa em -100%, para dar a impressão de uma ao lado da outra
    this.bg02_x = this.p5Vars.width; // width = p5 var = canvas width

    // Inicializa o som do jogo
    if (gameConfig.sound) this.props.sound.loop();
  }

  // Movimenta os Backgrounds para trás
  animateBackground() {
    this.bg01_x -= this.gameConfig.speed;
    this.bg02_x -= this.gameConfig.speed;

    // Ao chegar no limite da largura, reseta
    if (this.bg01_x < -width) this.bg01_x = this.p5Vars.width;
    if (this.bg02_x < -width) this.bg02_x = this.p5Vars.width;
  }

  render() {
    // Coloca uma imagem ao lado da outra
    image(this.props.image, this.bg01_x, 0, p5Vars.width, this.p5Vars.height);
    image(this.props.image, this.bg02_x, 0, p5Vars.width, this.p5Vars.height);

    this.animateBackground();
  }
}

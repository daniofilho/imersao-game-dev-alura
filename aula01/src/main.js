import P5 from 'p5';
//import 'p5/lib/addons/p5.dom';
//import 'p5/lib/addons/p5.sound';

import Scenario from '~/core/Scenario';
import Player from '~/core/Player';

import * as config from '~/config';

import '~/style.css';

function run(p5) {
  let scenario = {
    config: config.scenario,
  };
  let player = {
    config: config.player,
  };

  // Preload assets
  p5.preload = () => {
    // Scenario
    scenario.image = p5.loadImage(scenario.config.imageFile);
    //scenario.sound = loadSound(scenario.soundFile);

    // Player
    player.image = p5.loadImage(player.config.imageFile);
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
  };

  // P5 - Game Loop
  p5.draw = () => {
    // Scenario
    scenario.instance.render();

    // Player
    player.instance.render();
  };
}

new P5(run);

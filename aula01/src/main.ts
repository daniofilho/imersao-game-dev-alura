import * as p5 from 'p5';
import 'p5/lib/addons/p5.sound'; // only works on p5 version "^0.9.0" - DONT'T UPDATE UNTIL A FIX IS RELEASED

import Scenario from './core/Scenario';
import Player from './core/Player';

import { playerType, scenarioType } from './types';

import * as config from './config';

import 'style.css';

function run(p5: p5) {
  let scenario: scenarioType = {
    config: config.scenario,
  };
  let player: playerType = {
    config: config.player,
  };

  // Preload assets
  p5.preload = () => {
    // Scenario
    scenario.image = p5.loadImage(scenario.config.imageFile);
    // @ts-ignore - @TODO: find out why TS can't find type of loadSound
    scenario.sound = p5.loadSound(scenario.config.soundFile);

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
new p5(run);

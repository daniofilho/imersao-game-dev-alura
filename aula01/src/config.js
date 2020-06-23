import scenarioImage from '~/assets/images/scenario/wood.png';
import soundtrack from '~/assets/sounds/soundtrack.mp3';

import playerImage from '~/assets/images/player/running.png';

export const game = {
  fps: 30,
  speed: 5,
  sound: true,
};

export const scenario = {
  imageFile: scenarioImage,
  soundFile: soundtrack,
};

const playerHeight = 135;
export const player = {
  imageFile: playerImage,
  imageFileWidth: 880,
  imageFileHeight: 1080,
  x: 20,
  y: 20,
  width: 110,
  height: playerHeight,
  spriteX0: 0,
  spriteY0: 0,
  spriteWidth: 220,
  spriteHeight: 270,
};

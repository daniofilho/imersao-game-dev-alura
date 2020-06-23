// @ts-ignore
import p5 from 'p5';

import Sprite from '../../lib/Sprite';

import { playerType } from '../../types';

export default function Player(props: playerType, p5: p5) {
  const {
    image: playerImage,
    config: { x, y, width, height, spriteWidth, spriteHeight, imageFileWidth, imageFileHeight },
  } = props;

  // Put player on the ground
  let y0 = p5.height - height;

  // Sprite
  let sprite = Sprite(imageFileWidth, imageFileHeight, spriteWidth, spriteHeight);
  let totalFrames = sprite.getFramesQuantity();
  let actualFrameNumber = 1;

  let spriteX = sprite.getFrame(actualFrameNumber).x;
  let spriteY = sprite.getFrame(actualFrameNumber).y;

  const incrementFrameNumber = () => {
    actualFrameNumber++;
    actualFrameNumber = actualFrameNumber >= totalFrames ? 1 : actualFrameNumber;
  };

  const animate = () => {
    const frame = sprite.getFrame(actualFrameNumber);

    spriteX = frame.x;
    spriteY = frame.y;

    incrementFrameNumber();
  };

  const render = () => {
    p5.image(playerImage, x, y0, width, height, spriteX, spriteY, spriteWidth, spriteHeight);

    animate();
  };

  return {
    render,
  };
}

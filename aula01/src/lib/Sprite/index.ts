import { objFrameType } from './types';

export default function Sprite(w: number, h: number, kW: number, kH: number) {
  // Size of image sprite
  let width = w;
  let height = h;

  // Size of each frame square
  let keyWidth = kW;
  let keyHeight = kH;

  // Rows and Collumns quantity
  let cols = Math.ceil(width / keyWidth);
  let rows = Math.ceil(height / keyHeight);

  // The frames
  let framesObj: any = {};

  // Get frame quantity
  const getFramesQuantity = () => {
    const count = (obj: objFrameType) => {
      let size = 0;
      let key: any;
      for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
      }
      return size;
    };
    return count(framesObj) + 1; // don't worry about array position 0
  };

  // Get frame props
  const getFrame = (num: number) => {
    return {
      x: framesObj[num - 1].x,
      y: framesObj[num - 1].y,
    };
  };

  // # Run
  const run = () => {
    // Gen each frame based on sizes
    let index = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        framesObj[index] = {
          x: keyWidth * c,
          y: keyHeight * r,
        };
        index++;
      }
    }
  };
  run();

  return {
    getFramesQuantity,
    getFrame,
  };
}

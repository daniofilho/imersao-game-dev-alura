class Sprite {
  constructor(w, h, kW, kH) {
    // Size of image sprite
    this.width = w;
    this.height = h;

    // Size of each frame square
    this.keyWidth = kW;
    this.keyHeight = kH;

    // Rows and Collumns quantity
    this.cols = Math.ceil(w / kW);

    this.rows = Math.ceil(this.height / this.keyHeight);

    // The frames
    this.frames = {};

    this.run();
  }

  // Get frame quantity
  getFramesQuantity() {
    const count = (obj) => {
      var size = 0,
        key;
      for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
      }
      return size;
    };
    return count(this.frames) + 1; // don't worry about array position 0
  }

  // Get frame props
  getFrame(num) {
    return {
      x: this.frames[num - 1].x,
      y: this.frames[num - 1].y,
    };
  }

  // # Run
  run() {
    // Gen each frame based on sizes
    let index = 0;
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        this.frames[index] = {
          x: this.keyWidth * c,
          y: this.keyHeight * r,
        };
        index++;
      }
    }
  }
}

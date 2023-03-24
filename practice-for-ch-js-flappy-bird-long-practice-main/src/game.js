import Level from "./level"
export default class FlappyBird {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
  }
}

FlappyBird.prototype.animate = function() { 
  const that = this;
  return function() {
    drawBackground(that);
  }
}

FlappyBird.prototype.restart = function() {
  return this.animate();
}

// newGame = new FlappyBird
// newGame.animate()
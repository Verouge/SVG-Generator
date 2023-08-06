class Triangle {
  constructor(color) {
    this.color = color;
  }
  toSVG() {
    return `<polygon points="150,25 275,175 25,175" fill="${this.color}" />`;
  }
}

class Circle {
  constructor(color) {
    this.color = color;
  }
  toSVG() {
    return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
  }
}

class Square {
  constructor(color) {
    this.color = color;
  }
  toSVG() {
    return `<rect width="100" height="100" x="100" y="50" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Circle, Square };

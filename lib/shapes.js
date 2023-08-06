class Triangle {
  // Constructor initializes a Triangle instance with a color
  constructor(color) {
    this.color = color;
  }
  // Method to convert a Triangle instance to its SVG representation
  toSVG() {
    return `<polygon points="150,25 275,175 25,175" fill="${this.color}" />`;
  }
}

class Circle {
  // Constructor initializes a Circle instance with a color
  constructor(color) {
    this.color = color;
  }
  // Method to convert a Circle instance to its SVG representation
  toSVG() {
    return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
  }
}

class Square {
  // Constructor initializes a Square instance with a color
  constructor(color) {
    this.color = color;
  }
  // Method to convert a Square instance to its SVG representation
  toSVG() {
    return `<rect width="100" height="100" x="100" y="50" fill="${this.color}" />`;
  }
}

// Export the classes for external use
module.exports = { Triangle, Circle, Square };

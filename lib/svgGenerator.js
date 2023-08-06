// Function to generate SVG content based on user input
const { Triangle, Circle, Square } = require("./shapes");
const generateSVG = (text, textColor, shapeType, shapeColor) => {
  let shape;
  // Depending on the chosen shape, create the respective shape object
  switch (shapeType) {
    case "triangle":
      shape = new Triangle(shapeColor);
      break;
    case "circle":
      shape = new Circle(shapeColor);
      break;
    case "square":
      shape = new Square(shapeColor);
      break;
    default:
      throw new Error("Invalid shape type");
  }

  // Return the full SVG string with both the shape and the text
  return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape.toSVG()}
        <text x="150" y="115" font-family="Arial" font-size="40" fill="${textColor}" text-anchor="middle">${text}</text>
    </svg>`;
};

module.exports = generateSVG;

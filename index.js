const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes");
const fs = require("fs");

const generateSVG = (text, textColor, shapeType, shapeColor) => {
  let shape;
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

  return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape.toSVG()}
        <text x="150" y="115" font-family="Arial" font-size="40" fill="${textColor}" text-anchor="middle">${text}</text>
    </svg>`;
};

const isValidColor = (input) => {
  // Define a basic set of color keywords.
  const keywords = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "pink",
    "cyan",
  ];

  // Check if the input matches any of the keywords.
  if (keywords.includes(input.toLowerCase())) return true;

  // Check if the input is a valid hexadecimal color.
  const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return hexPattern.test(input);
};

inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter a text (up to three characters):",
      validate: (input) => input.length <= 3,
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter the text color (color keyword or hexadecimal):",
      validate: (input) => {
        if (isValidColor(input)) return true;
        return "Please enter a valid color keyword (like 'red') or a hexadecimal color (like '#F00' or '#FF0000').";
      },
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter the shape color (color keyword or hexadecimal):",
      validate: (input) => {
        if (isValidColor(input)) return true;
        return "Please enter a valid color keyword (like 'red') or a hexadecimal color (like '#F00' or '#FF0000').";
      },
    },
  ])
  .then((answers) => {
    const svgContent = generateSVG(
      answers.text,
      answers.textColor,
      answers.shape,
      answers.shapeColor
    );

    if (svgContent) {
      fs.writeFileSync("logo.svg", svgContent);
      console.log("Generated logo.svg");
    } else {
      console.error("Error generating SVG content");
    }
  });

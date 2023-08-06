const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes");
const fs = require("fs");
const { createCanvas } = require("canvas");

// Validate color function
const isValidColor = (input) => {
  // Check if the input is a valid hexadecimal color.
  const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  if (hexPattern.test(input)) return true;

  // Check using a canvas if the input is a valid color name.
  const canvas = createCanvas(10, 10);
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "invalidcolor"; // Initialize with an invalid value
  ctx.fillStyle = input; // Try to assign the user's input
  return ctx.fillStyle !== "invalidcolor"; // If the color is valid, fillStyle would have been changed
};

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

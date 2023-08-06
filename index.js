const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes");
const fs = require("fs");
const isValidColor = require("./lib/colorValidation");

// Function to generate SVG content based on user input
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

inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter a text (up to three characters):",
      validate: (input) => input.length <= 3, // Ensure input is 3 characters or less
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter the text color (color keyword or hexadecimal):",
      validate: (input) => {
        if (isValidColor(input)) return true;
        return "Please enter a valid color keyword (like 'red') or a hexadecimal color (like '#F00' or '#FF0000').";
      }, // Validate input using the isValidColor function
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
      }, // Validate input using the isValidColor function
    },
  ])
  .then((answers) => {
    // Generate the SVG based on user answers
    const svgContent = generateSVG(
      answers.text,
      answers.textColor,
      answers.shape,
      answers.shapeColor
    );
    // If SVG generation was successful, write it to a file
    if (svgContent) {
      fs.writeFileSync("logo.svg", svgContent);
      console.log("Generated logo.svg");
    } else {
      console.error("Error generating SVG content");
    }
  });

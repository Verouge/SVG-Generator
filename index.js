const inquirer = require("inquirer");
const generateSVGFile = require("./lib/shapes");

function promptUser() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "text",
        message: "Enter up to three characters",
        validate: (input) => {
          input.length <= 3;
        },
      },
      {
        type: "input",
        name: "textColor",
        message: "Enter the text color (keyword or hexidecimal)",
      },
      {
        type: "list",
        name: "shape",
        message: "What shape should it be?",
        choices: ["square", "circle", "triangle"],
      },
      {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape color (keyword or hexidecimal)",
      },
    ])
    .then((answers) => {
      generateSVGFile(
        answers.text,
        answers.textColor,
        answers.shape,
        answers.shapeColor
      );
      console.log("Generated logo.svg");
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}

promptUser();

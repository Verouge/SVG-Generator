const { createCanvas } = require("canvas");

// Validate if the given color is a valid keyword or hexadecimal representation
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

module.exports = isValidColor;

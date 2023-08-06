const { Triangle, Circle, Square } = require("./shapes");

// Begin the test suite for Shapes
describe("Shapes", () => {
  // Test suite specifically for the Triangle class
  describe("Triangle", () => {
    // Test the initialization of the Triangle class with a given color
    it("should initialize with the given color", () => {
      const triangle = new Triangle("red");
      expect(triangle.color).toBe("red");
    });
    // Test the SVG conversion method of the Triangle class
    it("should return an SVG representation when converted", () => {
      const triangle = new Triangle("red");
      const svg = triangle.toSVG();
      expect(svg).toContain("<polygon");
      expect(svg).toContain('fill="red"');
    });
  });
  // Test suite specifically for the Circle class
  describe("Circle", () => {
    // Test the initialization of the Circle class with a given color
    it("should initialize with the given color", () => {
      const circle = new Circle("blue");
      expect(circle.color).toBe("blue");
    });
    // Test the SVG conversion method of the Circle class
    it("should return an SVG representation when converted", () => {
      const circle = new Circle("blue");
      const svg = circle.toSVG();
      expect(svg).toContain("<circle");
      expect(svg).toContain('fill="blue"');
    });
  });
  // Test suite specifically for the Square class
  describe("Square", () => {
    // Test the initialization of the Square class with a given color
    it("should initialize with the given color", () => {
      const square = new Square("green");
      expect(square.color).toBe("green");
    });
    // Test the SVG conversion method of the Square class
    it("should return an SVG representation when converted", () => {
      const square = new Square("green");
      const svg = square.toSVG();
      expect(svg).toContain("<rect");
      expect(svg).toContain('fill="green"');
    });
  });
});

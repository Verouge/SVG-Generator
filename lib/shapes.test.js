const { Triangle, Circle, Square } = require("./shapes");

describe("Shapes", () => {
  describe("Triangle", () => {
    it("should initialize with the given color", () => {
      const triangle = new Triangle("red");
      expect(triangle.color).toBe("red");
    });

    it("should return an SVG representation when converted", () => {
      const triangle = new Triangle("red");
      const svg = triangle.toSVG();
      expect(svg).toContain("<polygon");
      expect(svg).toContain('fill="red"');
    });
  });

  describe("Circle", () => {
    it("should initialize with the given color", () => {
      const circle = new Circle("blue");
      expect(circle.color).toBe("blue");
    });

    it("should return an SVG representation when converted", () => {
      const circle = new Circle("blue");
      const svg = circle.toSVG();
      expect(svg).toContain("<circle");
      expect(svg).toContain('fill="blue"');
    });
  });

  describe("Square", () => {
    it("should initialize with the given color", () => {
      const square = new Square("green");
      expect(square.color).toBe("green");
    });

    it("should return an SVG representation when converted", () => {
      const square = new Square("green");
      const svg = square.toSVG();
      expect(svg).toContain("<rect");
      expect(svg).toContain('fill="green"');
    });
  });
});

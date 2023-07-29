// import shapes.js
const Shapes = require("../lib/shapes.js");

const { Circle, Triangle, Square } = Shapes;

describe("Circle", () => {
	describe("renderShape", () => {
		it("should render a circle filled with a color", () => {
			const color = "blue";
			const circle = new Circle(color);
			expect(circle.renderShape()).toEqual(
				'<circle cx="150" cy="100" r="70" fill="blue"/>'
			);
		});
	});
	describe("renderText", () => {
		it("should render color text", () => {
			// added the color variable as a placeholder for the shapeFill argument expected when instantiating a new Circle class
			const color = "color";
			const textColor = "white";
			const text = "ABC";
			const circleText = new Circle(color, textColor, text);
			expect(circleText.renderText()).toEqual(
				`<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ABC`
			);
		});
	});
});

describe("Triangle", () => {
	describe("renderShape", () => {
		it("should render a triangle filled with a color", () => {
			const color = "white";
			const triangle = new Triangle(color);
			expect(triangle.renderShape()).toEqual(
				'<polygon points="150, 15 264, 142 36, 142" fill="white" />'
			);
		});
	});
	describe("renderText", () => {
		it("should render color text", () => {
			// added the color variable as a placeholder for the shapeFill argument expected when instantiating a new Triangle class
			const color = "color";
			const textColor = "white";
			const text = "ABC";
			const triangleText = new Triangle(color, textColor, text);
			expect(triangleText.renderText()).toEqual(
				`<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ABC`
			);
		});
	});
});

describe("Square", () => {
	describe("renderShape", () => {
		it("should render a square filled with a color", () => {
			const color = "pink";
			const square = new Square(color);
			expect(square.renderShape()).toEqual(
				'<rect width="130" height="130" x="85" y="35"  fill="pink"/>'
			);
		});
    });
    	describe("renderText", () => {
			it("should render color text", () => {
				// added the color variable as a placeholder for the shapeFill argument expected when instantiating a new Square class
				const color = "color";
				const textColor = "white";
				const text = "ABC";
				const squareText = new Square(color, textColor, text);
				expect(squareText.renderText()).toEqual(
					`<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ABC`
				);
			});
		});
});

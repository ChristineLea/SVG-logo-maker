// /^#[0-9A-F]{6}$/i.test("#AABBCC");
// 6 char hex code
// ^          -> match beginning
// #          -> a hash
// [0-9A-F]   -> any integer from 0 to 9 and any letter from A to F
// {6}        -> the previous group appears exactly 6 times
// $          -> match end
// i          -> ignore case
// test for a 6hex code

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
});

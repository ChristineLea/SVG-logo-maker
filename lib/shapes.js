// Shapes class
class Shapes {
	constructor(shapeFill, textColor, text) {
		this.shapeFill = shapeFill;
		this.textColor = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">`;
		this.text = text;
	}
	// method formats the text & text color of logo
	renderText() {
		return `${this.textColor}${this.text}`;
	}
	renderShape() {
		return `${this.shapeFill}`;
	}
}

// Inherits from Shapes
class Circle extends Shapes {
	constructor(shapeFill, textColor, text) {
		super(shapeFill, textColor, text);
		this.shape = `<circle cx="150" cy="100" r="80" fill="${this.shapeFill}"/>`;
	}
	// method formats the shape and shape color of logo
	renderShape() {
		return `${this.shape}`;
	}
}

// inherits from Shapes
class Triangle extends Shapes {
	constructor(shapeFill, textColor, text) {
		super(shapeFill, textColor, text);
		this.shape = `<polygon points="150, 15 264, 162 36, 162" fill="${this.shapeFill}" />`;
	}
	// method formats the shape and shape color of logo
	renderShape() {
		return `${this.shape}`;
	}
}

// Inherits from Shapes
class Square extends Shapes {
	constructor(shapeFill, textColor, text) {
		super(shapeFill, textColor, text);
		this.shape = `<rect width="150" height="150" x="75" y="25"  fill="${this.shapeFill}"/>`;
	}
	// method formats the shape and shape color of logo
	renderShape() {
		return `${this.shape}`;
	}
}

// creates a new instance of either a Circle, Square or Triangle based on user selection
async function getShape({ shape, shapeFill, textColor, text }) {
	if (shape === "Circle") {
		shape = new Circle(shapeFill, textColor, text);
	} else if (shape === "Triangle") {
		shape = new Triangle(shapeFill, textColor, text);
	} else if (shape === "Square") {
		shape = new Square(shapeFill, textColor, text);
	}
	return shape;
}

// invoked in index.js
async function generateMarkdown(data) {
	// transforms text to uppercase
	data.text = data.text.toUpperCase();

	// instantiate a new shape
	const logoSvg = await getShape(data);

	// invoke object method to render the shape
	const logoShape = logoSvg.renderShape();

	// invoke object method to render text
	const logoText = logoSvg.renderText();

	// returns the formatted data to be used in the writeFile function
	return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${logoShape}
	    ${logoText}
        </text>
        </svg>`;
}

// exports to be used in index.js & shapes.test.js
module.exports = {
    generateMarkdown,
	Shapes,
	Square,
	Circle,
	Triangle,
};

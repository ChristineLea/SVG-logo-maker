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

class Shapes {
	constructor(shapeFill, textColor, text) {
		this.shapeFill = shapeFill;
		this.textColor = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">`;
		this.text = text;
	}

	renderText() {
		return `${this.textColor}${this.text}`;
	}
	renderShape() {
		return `${this.shapeFill}`;
	}
}

class Circle extends Shapes {
	constructor(shapeFill, textColor, text) {
		super(shapeFill, textColor, text);
		this.shape = `<circle cx="150" cy="100" r="80" fill="${this.shapeFill}"/>`;
	}
	renderShape() {
		return `${this.shape}`;
	}
}

class Triangle extends Shapes {
	constructor(shapeFill, textColor, text) {
		super(shapeFill, textColor, text);
		this.shape = `<polygon points="150, 15 264, 162 36, 162" fill="${this.shapeFill}" />`;
	}
	renderShape() {
		return `${this.shape}`;
	}
}

class Square extends Shapes {
	constructor(shapeFill, textColor, text) {
		super(shapeFill, textColor, text);
		this.shape = `<rect width="150" height="150" x="75" y="25"  fill="${this.shapeFill}"/>`;
	}
	renderShape() {
		return `${this.shape}`;
	}
}


async function generateMarkdown(data) {
	data.text = data.text.toUpperCase();

	const logoSvg = await getShape(data);

	const logoShape = logoSvg.renderShape();

	const logoText = logoSvg.renderText();
	return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${logoShape}
	    ${logoText}
        </text>
        </svg>`;
}
module.exports = {
    generateMarkdown,
	Shapes,
	Square,
	Circle,
	Triangle,
};

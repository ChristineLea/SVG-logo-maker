// async function getShape(data) {
//     data.text = data.text.toUpperCase();

// 	const { shape, shapeFill, text, textColor } = data;

//     if (shape === "Circle") {
// 		const circle = new Circle(shape, shapeFill, text, textColor);
// 		return circle.render();
// 	} else if (shape === "Triangle") {
//         const triangle = new Triangle(shape, shapeFill, text, textColor);
//         return triangle.render();
//     } else if (shape === "Square") {
//         const square = new Square(shape, shapeFill, text, textColor);
//         return square.render();
//     }
// }

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
		this.shape = `<circle cx="150" cy="100" r="70" fill="${this.shapeFill}"/>`;
	}
	renderShape() {
		return `${this.shape}`;
	}
}

class Triangle extends Shapes {
	constructor(shapeFill, textColor, text) {
		super(shapeFill, textColor, text);
		this.shape = `<polygon points="150, 15 264, 142 36, 142" fill="${this.shapeFill}" />`;
	}
	renderShape() {
		return `${this.shape}`;
	}
}

class Square extends Shapes {
	constructor(shapeFill, textColor, text) {
		super(shapeFill, textColor, text);
		this.shape = `<rect width="130" height="130" x="85" y="35"  fill="${this.shapeFill}" />`;
	}
	renderShape() {
		return `${this.shape}`;
	}
}
// SQUARE

// TODO set up a Square class
// TODO set up a Circle class
// TODO set up a Triangle class
// TODO test each class for a render() method
async function generateMarkdown(data) {
	data.text = data.text.toUpperCase();

	const shapes = await getShape(data);
	const shape = shapes.renderShape();
	const text = shapes.renderText();
	return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape}
	    ${text}
        </text>
        </svg>`;
}
module.exports = generateMarkdown;

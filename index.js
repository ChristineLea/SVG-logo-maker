// require() shapes.js
const inquirer = require("inquirer");
const fs = require("fs/promises");
const shapes = require("./lib/shapes.js");

// TODO create a questions array
const questions = [
	{
		name: "text",
		type: "input",
		message: "TEXT: Enter up to three characters to add to your logo",
		validate(answer) {
			// check no more than 3 characters
		},
	},
	{
		name: "textColor",
		type: "input",
		message:
			"TEXT COLOR: What color do you want the text to be?  Enter a color keyword OR a hex color ",
		// validate
	},
	{
		name: "shape",
		type: "list",
		message: "What shape do you want to use for your logo?",
		choices: ["Circle", "Triangle", "Square"],
		// validate
	},
	{
		name: "shapeFill",
		type: "input",
		message:
			"SHAPE COLOR: What color do you want the shape to be?  Enter a color keyword OR a hex color ",
		// validate
	},
];
// if (data.shape === "circle") {data.shape = circle}

const shapes = {
	circle: `circle cx="150" cy="100" r="70"`,
	square: `rect width="130" height="130" x="80" y="30"`,
    triangle: `polygon points="150, 1 274, 182 26, 182"`,
};
const color = `<text
		x="150"
		y="125"
		font-size="60"
		text-anchor="middle"
		fill="${data.textColor}">`;
const { circle, square, triangle } = shapes;
// const circle = 
// TODO inquirer.prompt() to ask questions
// TODO use answers in matching Shape class
// TODO writeFile
// set shape
// TODO hex color

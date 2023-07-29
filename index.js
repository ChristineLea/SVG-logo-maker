// require() shapes.js
const inquirer = require("inquirer");
const fs = require("fs/promises");
const shapes = require("./lib/shapes.js");

// TODO create a questions array
const questions = [
	{
		name: "shape",
		type: "list",
		message: "What shape do you want to use for your logo?",
		choices: ["Circle", "Triangle", "Square"],
	},
	{
		name: "shapeFill",
		type: "input",
		message:
			"SHAPE COLOR: What color do you want the shape to be?  Enter a color keyword OR a hex color ",
	},
	{
		name: "text",
		type: "input",
		message: "TEXT: Enter up to three characters to add to your logo",
		validate(answer) {
			// check no more than 3 characters
			if (answer.length >= 4) {
				console.log(
					"Logo text must be no longer than three characters."
				);
			} else {
				return true;
			}
		},
	},
	{
		name: "textColor",
		type: "input",
		message:
			"TEXT COLOR: What color do you want the text to be? Enter a color keyword OR a hex color ",
	},
];
// function writeFile() {
// 	fs.writeFile("./examples/logo.svg", )
// }
async function init() {
	const data = await inquirer.prompt(questions);

	const shape = await shapes(data);
	console.log(shape);
}
init();

// TODO inquirer.prompt() to ask questions
// TODO use answers in matching Shape class
// TODO writeFile
// set shape
// TODO hex color
// write svg 
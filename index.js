
const inquirer = require("inquirer");
const fs = require("fs/promises");
const validateColor = require("validate-color");
const { validateHTMLColorHex, validateHTMLColorName } = validateColor;
const shapes = require("./lib/shapes.js");


const questions = [
	{
		name: "shape",
		type: "list",
		message: "Select the logo shape :",
		choices: ["Circle", "Triangle", "Square"],
	},
	{
		name: "shapeFill",
		type: "input",
		message: "Enter a Named Color or Hex Color for the logo shape :",
		validate: function (answer) {
			if (validateHTMLColorName(answer) || validateHTMLColorHex(answer)) {
				return true;
			} else {
				console.error(
					"\x1b[31m%s \x1b[0m",
					"Enter a valid Color keyword or Hex Color."
				);
			}
		},
	},
	{
		name: "text",
		type: "input",
		message: "Enter 1 - 3 characters for the logo text :",
		validate(answer) {
			// check no more than 3 characters
			if (answer.length >= 4) {
				console.log(
					"\x1b[31m%s \x1b[0m",
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
		message: "Enter a Named Color or Hex Color for the logo text :",
		validate: function (answer) {
			if (validateHTMLColorName(answer) || validateHTMLColorHex(answer)) {
				return true;
			} else {
				console.error(
					"\x1b[31m%s \x1b[0m",
					"Enter a valid Color keyword or Hex Color."
				);
			}
		},
	},
];

function writeFile(fileName, data) {
	fs.writeFile(fileName, data, (err) => {
		if (err) {
			console.log("\x1b[31m%s \x1b[0m", "Error!");
		}
	});
	console.log("\x1b[32m%s \x1b[0m", "Generated logo.svg");
}

async function init() {
	const data = await inquirer.prompt(questions);

	const svgLogo = await shapes.generateMarkdown(data);
	writeFile("./examples/logo.svg", svgLogo);
}

init();

// Dependencies/Modules
const inquirer = require("inquirer");
const fs = require("fs/promises");
const validateColor = require("validate-color");
const { validateHTMLColorHex, validateHTMLColorName } = validateColor;
const shapes = require("./lib/shapes.js");

// Questions Array for inquirer prompt
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
			// Validate user input is either a Named color keyword or a Hex color using the validate-color NPM
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
			// Validate user input is either a Named color keyword or a Hex color using the validate-color NPM
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

// creates the logo.svg
function writeFile(fileName, data) {
	fs.writeFile(fileName, data, (err) => {
		if (err) {
			console.log("\x1b[31m%s \x1b[0m", "Error!");
		}
	});
	console.log("\x1b[32m%s \x1b[0m", "Generated logo.svg");
}

// Runs on initialisation 
async function init() {
	// "inquires" for input from a user & returns the data
	const data = await inquirer.prompt(questions);

	// data is passed to the shapes.js module 
	const svgLogo = await shapes.generateMarkdown(data);

	// returned data is used to create the logo.svg
	writeFile("./examples/logo.svg", svgLogo);
}

init();
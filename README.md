# SVG Logo Maker
  
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
 ## Description 
  
 This program will generate a basic SVG (Scalable Vector Graphic) Logo via the command line which can then be used for projects. Written using vanilla JavaScript language, and uses Object Orientated Programming (OOP) to store the data for each related SVG shape it can generate. This program runs in the Node.js environment, and requires Inquirer 8.2.4 NPM and Validate Color NPM as dependencies.

 Watch the [walkthrough video](https://drive.google.com/file/d/1XO0DAy6zF5LvNhf9LzbwRcDhdEBV9B0e/view) to view the program's functionality.

 ---
  
 ## Table of Contents
  
 - [1. Installation](#1-installation)
  
 - [2. Usage](#2-usage)
  
 - [3. Contributing](#3-contributing)
  
 - [4. Tests](#4-tests)
  
 - [5. Questions](#5-questions)
  
 - [6. Authors](#6-authors)
  
 - [7. License](#-license)
  
 ## 1. Installation
  
1. Download the source code or clone the source code, via the GitHub repository.

2. Using the provided link, download and install the LTS version of
   [Node.JS](https://nodejs.org/en/download/current)

3. Run the following command to verify that it has been installed:

```
node -v
```

4. Navigate to the source code folder either in the command line or throught the terminal in VS Code.

5. Run the following command to install the NPM dependencies to run the program:

```
npm install
```

6. Once this is completed, the program is installed and can be run using the following command:

```
npm start
```

PLEASE NOTE: To use Node.JS and Inquirer NPM you need a suitable command line tool, such as Windows Command Prompt (CMD), PowerShell, or GIT Bash.
  
 ## 2. Usage 
  
The program will "inquire" through a series of prompts, and generate a basic logo from the input recieved. 
* Color keywords or Hex colors are the accepted format in which a color selection can be made. 
* 1 - 3 characters can be included in the logo text
* Logo shape can be either a circle, triangle, or square
[Logo Example](./examples/logo.svg)
  
 ## 3. Contributing 
  
Not currently accepting contribution on this project.
 
 ## 4. Tests
 A testing file for the shapes.js module is included and can be run using Jest. Tests can be run with the following command.
 ```
 npm run test
 ```
  
 ## 5. Questions
  
 For any questions or support with using this application, 
  
  Submit an issue through my [GitHub Profile](https://github.com/ChristineLea)
  
 ## 6. Authors & Acknowledgement
  
 Christine Lea
 I would like to acknowledge the package dependencies used in this program, as well as a link to their GitHub repositories
 * [Inquirer NPM](https://github.com/SBoudrias/Inquirer.js) 
 * [Validate Color](https://github.com/dreamyguy/validate-color)

 ## 7. License
  
 This project is covered under MIT license.

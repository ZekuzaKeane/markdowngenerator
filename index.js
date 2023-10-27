// TODO: Include packages needed for this application
const fs = require(`fs`)
const inquirer = require(`inquirer`);
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    inquirer
        .prompt([
            {
                type: `input`,
                name: `title`,
                message: `Please add a title:`,
            },
            {
                type: `input`,
                name: `description`,
                message: `Please add a description:`,
            },
            {
                type: `input`,
                name: `installation`,
                message: `Please add installation instructions:`,
            },
            {
                type: `input`,
                name: `usage`,
                message: `Please add usage instructions:`,
            },
            {
                type: `input`,
                name: `contributing`,
                message: `Please add contributing guidelines:`,
            },
            {
                type: `input`,
                name: `unique`,
                message: `Please add what makes your project unique:`,
            },
            {
                type: 'list',
                name: 'license',
                message: 'Select a license:',
                choices: ['None', 'MIT'],
            },
            {
                type: `input`,
                name: `username`,
                message: `Please add your GitHub username:`,
            },
            {
                type: `input`,
                name: `email`,
                message: `Please add your email:`,
            },
        ])
        .then((data) => {
            const userData = data;
            console.log(userData);
            writeToFile();
  })
];

// TODO: Create a function to write README file
function writeToFile(filePath, userData) {
    console.log(generateMarkdown);
    const markdown = generateMarkdown(userData);
    fs.writeFile("README.md", markdown, (err) => { 
        if (err) 
          console.log(err); 
        else { 
          console.log("File written successfully\n"); 
          console.log("The written has the following contents:"); 
          console.log(fs.readFileSync("README.md", "utf8")); 
        } 
      }); 
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

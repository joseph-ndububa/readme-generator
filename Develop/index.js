// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions for your project.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage instructions for your application.',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'How can other developers contribute to the success of this project?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'How can users test your application?',
        }
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

promptUser();

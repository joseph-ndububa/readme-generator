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
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license.',
            choices: ['Apache License 2.0', 'BSD 3-Clause "New" or "Revised" license', 'BSD 2-Clause "Simplified" or "FreeBSD" license', 'GNU General Public License (GPL)', 'GNU General Public License (GPL)', 'MIT license', 'Mozilla Public License 2.0', 'Common Development and Distribution License', 'Eclipse Public License version 2.0']
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
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

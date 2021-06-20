// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/readme-template.js');
// TODO: Create an array of questions for user input
const promptUser = projectData => {

    let projectInfo = [];

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the name of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please provide a description of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions for your application.',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please provide installation instructions for your application!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage instructions for your application.',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide usage instructions for your application!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'How can other developers contribute to the success of this project?',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('Please describe how other developers can contribute to this project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'How can users test your application?',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please describe how users can test your application!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license.',
            choices: ['Apache License 2.0', 'BSD 3-Clause "New" or "Revised" license', 'BSD 2-Clause "Simplified" or "FreeBSD" license', 'GNU General Public License (GPL)', 'MIT license', 'Mozilla Public License 2.0', 'Eclipse Public License version 1.0'],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please choose a license!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your github username?',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter your github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        }
    ])
        .then(info => {
            projectInfo.push(info);
            return projectInfo;
        })
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

promptUser()
    .then(projectInfo => {
        const readmeData = generatePage(projectInfo);
        fs.writeFile('./generated-readme.md', readmeData, err => {
            if (err) throw new Error(err);
        })
    });

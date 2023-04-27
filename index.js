// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// function to initialize app with array of questions
function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Give your project a description.',
        name: 'description',
      },
      {
        type: 'input',
        message: 'List any installation instructions.',
        name: 'installInstructions',
      },
      {
        type: 'input',
        message: 'List any usage information.',
        name: 'usageInfo',
      },
      {
        type: 'input',
        message: 'List any contribution guidelines.',
        name: 'contributeGuide',
      },
      {
        type: 'input',
        message: 'List any test instructions.',
        name: 'testInstruct',
      },
      {
        type: 'rawlist',
        message: 'What license do you want to use?',
        choices: ['MIT', 'GNUAGPLv3', 'GNUGPLv3', 'GNULGPLv3', 'Mozilla', 'Apache', 'Boost', 'None'],
        name: 'license',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'githubUsername',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
    ])

    .then((data) => {
      const readmeTxt = generateMarkdown(data);
      generateMarkdown(data);

      fs.writeFile('readmeOutput.md', readmeTxt, (err) =>
          err ? console.error(err) : console.log('Success!')
        );
    });
}

// Function call to initialize app
init();

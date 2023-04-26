// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high - quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README


// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is your project description?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the installation instructions?',
      name: 'installInstructions',
    },
    {
      type: 'input',
      message: 'What is the usage information?"',
      name: 'usageInfo',
    },
    {
      type: 'input',
      message: 'What are the contribution guidelines?',
      name: 'contributeGuide',
    },
    {
      type: 'input',
      message: 'What are the test instructions?',
      name: 'testInstruct',
    },
    {
      type: 'rawlist',
      message: 'Which license do you need?',
      choices: ['MIT License', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense',],
      name: 'license',
    },

  ])
  .then((response) => {
    console.log(response)
    response === null
      ? console.log('You forgot to answer a question')
      : console.log('You answered all the questions successfully!')

    fs.writeFile('README.txt', JSON.stringify(response, null, '\t'), (err) =>
      err ? console.error(err) : console.log('Success!')
    );
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {


  // creating badge and adding it to README
  let badge = inquirer.prompt[6].name

  if (badge === 'MIT License') {
    let badgeDisplay = '![badge](https://img.shields.io/npm/l/license)';
    title.append(badgeDisplay);
  } if (badge === 'GNU AGPLv3') {
    let badgeDisplay = '![badge](https://img.shields.io/badge/license-GNU%20AGPLv3-green)';
    title.append(badgeDisplay);
  } if (badge === 'GNU GPLv3') {
    let badgeDisplay = '![badge](https://img.shields.io/badge/license-GNU%20GPLv3-green)';
    title.append(badgeDisplay);

  } if (badge === 'GNU LGPLv3') {
    let badgeDisplay = '![badge](https://img.shields.io/badge/license-GNU%2020LGPLv3-green)';
    title.append(badgeDisplay);

  } if (badge === 'Mozilla Public License 2.0') {
    let badgeDisplay = '![badge](https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-green)';
    title.append(badgeDisplay);

  } if (badge === 'Boost Software License 1.0') {
    let badgeDisplay = '![badge](https://img.shields.io/badge/license-Boost%20Software%20License%201.0-green';
    title.append(badgeDisplay);
  } if (badge === 'The Unlicense') {
    let badgeDisplay = '![badge](https://img.shields.io/badge/license-The%20Unlicense-green';
    title.append(badgeDisplay);






    // User inputs: 
    // title input - needs to go to top of page
    // description, installation instructions, usage information, contribution guidelines, and test instructions inputs -- need to be added to the Description, Installation, Usage, Contributing, and Tests sections
    // license options inputs: Checkbox?
    // license badge needs to be added to top of page
    // license description needs to be added to license section
    // GitHub username input -- needs to be added to the Questions section with link to GitHub profile
    // `https://github.com/${username}`
    // email address input -- needs to be added to Questions section with instructions on how to reach me with additional questions

    // Table of contents need to link to corresponding sections


  }

  // TODO: Create a function to initialize app
  function init() { }

  // Function call to initialize app
  init();

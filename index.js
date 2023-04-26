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


// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//  // function to create badge based on license selection
//   function badgeIcon(license) {
//     var badges = {
//       MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
//       GNUAGPLv3: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
//       GNUGPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
//       GNULGPLv3: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
//       Mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
//       Boost: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
//     }
//       return badges[license];
//   }

// function to write README file
const writeToFile = ({ description, installInstructions, usageInfo, license, contributeGuide, testInstruct, githubUsername, email }) =>
  ` ## Title 

    # Table of Contents
    1. [Description](#description)
    2. [Installation](#installation)
    3. [Usage](#usage)
    4. [License](#license)
    5. [Contributing](#contributing)
    6. [Tests](#tests)
    7. [Questions](#questions)

    # Description
    ${description}
    # Installation
    ${installInstructions}
    # Usage
    ${usageInfo}
    # License
    This project is subject to the protections of the ${license}.
    # Contributing
    ${contributeGuide}
    # Tests
    ${testInstruct}
    # Questions
    [GitHub Profile](https://github.com/${githubUsername})
    Feel free to email me with any questions about how to use this application.
    [Contact Me](mailto:${email})`

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is your project title?',
        name: 'Title',
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
        choices: ['MIT', 'GNUAGPLv3', 'GNUGPLv3', 'GNULGPLv3', 'Mozilla', 'Apache', 'Boost',],
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

    .then((response) => {
      const readmeTxt = writeToFile(response);

      fs.writeFile('readmeOutput.md', readmeTxt, (err) =>
          err ? console.error(err) : console.log('Success!')
        );
    });
}

// Function call to initialize app
init();

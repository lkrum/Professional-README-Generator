// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  var badges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    GNUGPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    GNULGPLv3: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
    Mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    Boost: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    None: '',
  }
  return badges[license];
}

// function to generate markdown for README
function generateMarkdown(data) {
  return ` # ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Description
${data.description}

## Installation
${data.installInstructions}

## Usage
${data.usageInfo}

## License
This project is subject to the protections of the ${data.license} license. Click on the license badge at the top of the page for more details about the license specifications.

## Contributing
${data.contributeGuide}

## Tests
${data.testInstruct}

## Questions
[GitHub Profile](https://github.com/${data.githubUsername})

[Email](mailto:${data.email})

Feel free to email me with any questions about how to use this application.
`;
}

module.exports = generateMarkdown;

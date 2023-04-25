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


// TODO: Create an array of questions for user input
const questions = [
  {"What is your project title?"},
  {"What is your project description?"},
  {"What are the installation instructions?"},
  {"What is the usage information?"},
  {"What are the contribution guidelines?"},
  {"What are the test instructions?"},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
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

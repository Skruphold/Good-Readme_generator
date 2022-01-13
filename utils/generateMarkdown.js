// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  // renderLicenseBadge();
  // renderLicenseLink();
  // renderLicenseSection();

  return `# ${data.title}
## Questions

### Username
<a href="https://github.com/${data.username}">${data.username}</a>
## Description 
${data.description}

## Table of Contents (Optional)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Contribute](#how-to-contribute)
- [Testing](#tests)
- [E-mail](#e-mail)
## Installation
${data.install}
## Usage
${data.usage}

## Credits

## License
${data.license}
## Features

## How to Contribute
${data.contribution}
## Tests
${data.testing}
## E-mail
<a href="mailto: ${data.Email}">${data.Email}</a>
`;
}

module.exports = generateMarkdown;

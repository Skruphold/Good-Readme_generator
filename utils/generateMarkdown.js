// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// var link;
// looping through the license response to see which badge and what info needs to be displayed
function renderLicenseBadge(license) {
  var licenseName = (license)
  switch(licenseName) {
    case "Apache License 2.0":
      link ="[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      linkInfo = "License shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document. Licensor shall mean the copyright owner or entity authorized by the copyright owner that is granting the License. Legal Entity shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity. For the purposes of this definition, control means i the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or ii ownership of fifty percent 50% or more of the outstanding shares, or iii beneficial ownership of such entity.You or Your shall mean an individual or Legal Entity exercising permissions granted by this License. Click on Badge for more info."
      // console.log("hello world")
      break;
    case "BSD License":
      link = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
      linkInfo = "Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met.     1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer. 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution. 3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission. Click on Badge for more info."
      // console.log("hey");
      break;
    case "GNU License":
      link = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      linkInfo = "The licenses for most software and other practical works are designed to take away your freedom to share and change the works. By contrast, the GNU General Public License is intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users. We, the Free Software Foundation, use the GNU General Public License for most of our software; it applies also to any other work released this way by its authors. You can apply it to your programs, too. Click on Badge for more info."
      break;
    case "MIT License":
      link = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      linkInfo = "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files the Software, to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions. Click on Badge for more info."
      break;
    case "Mozilla public License 2.0":
      link = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
      linkInfo = "1.1. “Contributor” means each individual or legal entity that creates, contributes to the creation of, or owns Covered Software clcik on badge for more info."
      break;
    case "None":
      link = ""
      linkInfo = ""
  }
  console.log("works")
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// taking all the user inputs and placing them in the correct part of the readme
function generateMarkdown(data) {
  renderLicenseBadge(data.license)
  // renderLicenseLink();
  // renderLicenseSection();

  return `# ${data.title}
## Badge 
${link}

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
Made by hunter with love!
## License
${data.license}
${linkInfo}
## Features

## How to Contribute
${data.contribution}
## Tests
${data.testing}
## Questions
### Username
<a href="https://github.com/${data.username}">${data.username}</a>
### E-mail
<a href="mailto: ${data.Email}">${data.Email}</a>
`;
}

module.exports = generateMarkdown;

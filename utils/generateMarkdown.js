// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(userData) {
  let licenseBadge = '';
  if (userData.license === 'None') {
    licenseBadge = '';
  } else if (userData.license === 'MIT') {
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(userData) {
  let licenseLink = '';
  if (userData.license === 'None') {
    licenseLink = '';
  } else if (userData.license === 'MIT') {
    licenseLink = 'https://opensource.org/licenses/MIT';
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(userData) {
  let licenseSection = '';
  if (userData.license === 'None') {
    licenseSection = '';
  } else if (userData.license === 'MIT') {
    licenseSection = `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userData) {
  return `
${renderLicenseBadge(userData)} ${userData.license}

# ${userData.title}

${userData.description}

# Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
${userData.installation}

## Usage
${userData.usage}

## License
${renderLicenseSection(userData)}

## Contributing
${userData.contributing}

## Tests
${userData.unique}

## Questions
If you have any questions or comments, please contact me at:
[Github](https://github.com/${userData.username})
Email: ${userData.email}
`;
}

module.exports = generateMarkdown;
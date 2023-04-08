const licenseBadgeMapping = [
  {
    friendlyName: "Academic Free License v3.0",
    licenseName: "afl-3.0",
    badgeName: "AFL--3.0",
  },
  {
    friendlyName: "Apache license 2.0",
    licenseName: "Apache-2.0",
    badgeName: "Apache_2.0",
  },
  {
    friendlyName: "SD 3-clause Clear license",
    licenseName: "bsd-3-clause-clear",
    badgeName: "BSD_3--Clause",
  },
  {
    friendlyName: "Creative Commons license family",
    licenseName: "cc0-1.0",
    badgeName: "CC0_1.0",
  },
  {
    friendlyName: "GN General Public License v3.0",
    licenseName: "lgpl-3.0",
    badgeName: "LGPL_v3",
  },
  {
    friendlyName: "ISC",
    licenseName: "isc",
    badgeName: "ISC",
  },
  {
    friendlyName: "MIT",
    licenseName: "mit",
    badgeName: "MIT",
  },
  {
    friendlyName: "Open Software License 3.0",
    licenseName: "osl-3.0",
    badgeName: "OSL--3.0",
  },
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    console.log(license);
    return `[![License: ${license}](https://img.shields.io/badge/License-${licenseBadgeMapping.badgeName}-blue.svg)](https://opensource.org/licenses/${licenseBadgeMapping.licenseName})`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    `[License Link](https://opensource.org/licenses/${licenseBadgeMapping.licenseName})`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, name) {
  if (license) {
    console.log(license);
    return `${name} is licensed under ${renderLicenseLink(license)}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Code to convert license selected by end user and converts into Badge/License values used by downstream functions.
  licenseBadgeMapping.forEach((obj) => {
    if (obj.friendlyName === data.license) {
      var convertedLicense = obj.licenseName;
      var convertedBadge = obj.badgeName;
    }
  });

  return `${renderLicenseBadge(convertedBadge)}
${console.log(convertedBadge)}

#${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)  

## Usage

${data.usage}

## License

${renderLicenseSection(convertedLicense, data.name)}
Link to license: ${renderLicenseLink(convertedLicense)}

## Contribution

${data.contribution}

## Tests

${data.test}

## Questions

Link to my [Github Profile](https://github.com/${data.username})

If you need to contact me directly, here's my email: ${data.email}!
  `;
}

module.exports = generateMarkdown;

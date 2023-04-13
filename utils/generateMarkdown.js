

// A function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string

function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}


// A function that returns string to link for licenses
// If there is no license, returns an empty string

function renderLicenseLink(license) {
  const licenses = {
    apache2: "https://www.apache.org/licenses/LICENSE-2.0",
    mit: "https://opensource.org/licenses/MIT",
    boost1: "https://www.boost.org/LICENSE_1_0.txt",
    mpl2: "https://www.mozilla.org/en-US/MPL/2.0/",
  };
  
  license = license.toLowerCase();
  
  if (licenses[license]) {
    return `[${license}](${licenses[license]})`;
  } else {
    return "";
  }
}


// A function that returns the license section of README 
// If there is no license, return an empty string
// Render license link called and generated, added to string
function renderLicenseSection(license) {
  const licenses = ["APACHE2.0", "MIT", "Boost1.0", "MPL2.0", "none"];

  if (!licenses.includes(license)) {
    return "";
  }

  const licenseLink = renderLicenseLink(license);

  return `
## License

This project is licensed under the ${license} License. 
${licenseLink}
`;
}

// Function to generate markdown for README, taking in the data object 
// "Render license section" called to generate section for license 

function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  # ${data.title}
  ## Description
  ${data.description}
 
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}
  ## Usage 
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Test
  ${data.test}
  ## Questions 
  ${data.questions}
  Find me on Github: [${data.username}](https://github.com/${data.username})
  Email me with questions at: ${data.email} 
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  `;
};

module.exports = generateMarkdown;

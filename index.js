// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

//  An array of questions for user input to generate on markdown file

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the name of your project?",
    }, {
      type: "input",
      name: "description",
      message: "Provide a short description explaining what, why, and how of your project. ",

    },
    {
      type: "input",
      name: "installation",
      message: "What steps are required to install your project?",
    }, {
      type: "input",
      name: "usage",
      message: "Provide any languages or dependicies used",
    }, {
      type: "input",
      name: "contributing",
      message: "List any collaborators or resources used for project.",
    },
    {
      type: "input",
      name: "test",
      message: "Do you have a test included?",
    },
    {
      type: "input",
      name: "questions",

    },

    {
      type: "list",
      name: "license",
      message: "Select a license applicable to this project",
      choices: ["APACHE2.0", "MIT", "Boost1.0", "MPL2.0", "none"]
    },
    {
      type: "input",
      name: "username",
      message: "Please eneter your Github username",

    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email here: "
    },

  ]);

}

// A function to write the README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// A function to initialize app
function init() {
  promptUser()
    .then((responses) => {
      console.log("High Quality README.md file created...");
      const readmeContent = generateMarkdown(responses);
      writeToFile("./dist/README.md", readmeContent);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};
// Function call to initialize app
init();

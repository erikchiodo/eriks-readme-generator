// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");

// TODO: Create an array of questions for user input
const userPrompts = [
  {
    type: "input",
    name: "title",
    message: "Enter title of your project: ",
  },
  {
    type: "input",
    name: "description",
    message: "Enter description: ",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instruction: ",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information: ",
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter contribution guidelines: ",
  },
  {
    type: "input",
    name: "test",
    message: "Enter test instructions: ",
  },
  {
    type: "input",
    name: "reponame",
    message: "Enter repo name: ",
  },
  {
    type: "input",
    name: "username",
    message: "Enter Github username: ",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address: ",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license",
    choices: [
      { name: "No License", value: "" },
      "AFL--3.0",
      "Apache_2.0",
      "Boost_1.0",
      "BSD_3",
      "CC0_1.0",
      "LGPL_v3",
      "ISC",
      "MIT",
      "OSL--3.0",
    ],
  },
];

// function to write README file

function createFile(fileName, data) {
  try {
    let filePath = path.join(__dirname, "/distri/", fileName);
    fs.writeFileSync(filePath, data);
    console.log("Readme generated successfully");
  } catch (error) {
    console.log("Error generating file");
    console.error(error);
  }
}

function init() {
  inquirer
    .prompt(userPrompts)
    .then((userResponses) => {
      const readMeData = generateMarkdown(userResponses);
      createFile("README.md", readMeData);
    })
    .catch((err) => console.error(err));
}

// function call to initialize app
init();

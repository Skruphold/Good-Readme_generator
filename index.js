// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// const questions = [];
inquirer.prompt([
    {
        type: "input",
        message: "would is the Title?",
        name: "title"
    },
    {
        type: "input",
        message: "What is your description?",
        name: "description"
    },
    {
        type: "list",
        message: "Which license?",
        name: "license",
        choices: ["Apache License 2.0", "BSD License", "GNU License", "MIT License", "Mozilla public License 2.0"]
    },
    {
        type: "input",
        message: "Installment instructions?",
        name: "install"
    },
    {
        type: "input",
        message: "Usage information?",
        name: "usage"
    },
    {
        type: "input",
        message: "Contribution?",
        name: "contribution"
    },
    {
        type: "input",
        message: "Test instructions?",
        name: "testing"
    },
    {
        type: "input",
        message: "Github username?",
        name: "username"
    },
    {
        type: "input",
        message: "E-mail?",
        name: "Email"
    },

]).then((answers) => {
    console.log(answers);
    var readmeStr = writeToFile(answers);
    // console.log(readmeStr);
    fs.writeFile('genReadme.md', readmeStr, (err) => {
        if (err) {
            console.log(err);
        } else {
        console.log("successful") 
        }
    })
})

// TODO: Create a function to write README file
function writeToFile(data) {
    return generateMarkdown(data);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

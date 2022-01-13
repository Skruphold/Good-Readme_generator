// TODO: Include packages needed for this application
// requirering all modules 
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// const questions = [];
// skipped the array and just prompted the user from inquirer filled in with 9 objects containing the questions
inquirer.prompt([
    {
        type: "input",
        message: "What is the title of this project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is your description for this project?",
        name: "description"
    },
    {
        type: "list",
        message: "Which license would you like to use?",
        name: "license",
        choices: ["None", "Apache License 2.0", "BSD License", "GNU License", "MIT License", "Mozilla public License 2.0",]
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
        message: "Contribution to this project?",
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
// taking the response from the file system in the node and writing them to markdown.js
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
// writeToFile just returns the generateMarkdown function.
function writeToFile(data) {
    return generateMarkdown(data);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

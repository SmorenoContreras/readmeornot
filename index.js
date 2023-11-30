// packages required for application
const inquirer = require("inquirer");

const fs = require("fs");

const path = require("path");

const generateMarkdown = require("./assets/utils/generateMarkdown");

//  array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What's the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a brief description of your project:"
    },
    {
        type: "input",
        name: "dependencies",
        message: "What are the installation instructions of your project?",
        default: "npm i"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the proper usage of this repo?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Who are the contributors of this repo?"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test"
    },
    {
        type: "list",
        name: "license",
        message: "What license does your project have?",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "GLP3.0", "BSD2", "BSD3", "None"]
    },
    {
        type: "input",
        name: "github",
        message: "Please provide your GitHub username:"
    },

    {
        type: "input",
        name: "email",
        message: "Please provide your Email:"
    },
    
];

// function to write read me file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


function init() {
    inquirer.prompt(questions)
    .then((inquirerAnswers) => {
        const { title } = inquirerAnswers;
        const fileName = `${title.replace(/\s+/g, '-').toLowerCase()}-README.md`; // Convert title to lowercase and replace spaces with hyphens
        console.log("Generating.... Please wait....\nReadMe Generated Successfully!\nPlease check the generated file in /assets/utils folder");
        writeToFile(`./assets/utils/${fileName}`, generateMarkdown({ ...inquirerAnswers }));
    })
}

// function call to initialize app
init();

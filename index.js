const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const fs = require('fs');

//empty array to place team members into//
let team = [];

function Manager() {
    inquirer.prompt([
        {
            type: "input",
            name: 'name',
            message: "What is the team manager's name?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?",
        },
    ])

        .then(function (data) {
            const name = data.name;
            const id = 1;
            const email = data.email;
            const officeNumber = data.officeNumber;
            const newTeamMember = new Manager(name, id, email, officeNumber);
            team.push(newTeamMember);
            addTeam();
        });
}

function addTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'teamData',
            message: 'Would you like to add additional team members?',
            choices: ['Yes, add and engineer', 'Yes, add an intern', 'No, my team is finished.']
        }
    ])
}

function engineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email",
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's github profile?",
        }
    ])

        .then(function (data) {
            const name = data.name;
            const id = team.length + 1;
            const email = data.email;
            const github = data.github;
            const newTeamMember = new Engineer(name, id, email, github);
            team.push(newTeamMember);
            addTeam();
        });
};

function intern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
        },
        {
            type: 'input',
            name: 'email',
            message: "what is the intern's email?",
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school does the intern attend?',
        }
    ])

        .then(function (data) {
            const name = data.name;
            const id = team.length+1;
            const email = data.email;
            const school = data.school;
            const newTeamMember = new Intern(name, id, email, school);
            team.push(newTeamMember);
            addTeam();
        });
}
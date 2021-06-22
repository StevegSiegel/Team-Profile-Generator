const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const fs = require('fs');

let team = [];

function addManager() {
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
        const teamMember = new Manager(name, id, email, officeNuber);
        team.push(teamMember);
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

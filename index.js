const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const fs = require('fs');

//empty array to place team members into//
let team = [];

//start by asking for manager info//
manager();

// asks for info about the manager//
function manager() {
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


// asks for info about the engineer//
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

// asks for info about the intern
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
            const id = team.length + 1;
            const email = data.email;
            const school = data.school;
            const newTeamMember = new Intern(name, id, email, school);
            team.push(newTeamMember);
            addTeam();
        });
};


//this is the function that asks if you'd like to add additional team members//
function addTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'teamData',
            message: 'Would you like to add additional team members?',
            choices: ['Yes, add an engineer', 'Yes, add an intern', 'No, my team is finished']
        }
    ])

        .then(function (data) {
            switch (data.teamData) {
                case "Yes, add an engineer":
                    engineer();
                    break;

                case "Yes, add an intern":
                    intern();
                    break;

                case "No, my team is finished":
                    createTeam();
                    break;
            }

        });
};

// adds the info about the employees into an html document//
function createTeam() {
    const htmlPage = [];
    const htmlContent = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>

    <body>
        <div class="jumbotron jumbotron-fluid bg-primary bg-gradient text-center pt-4 pb-5">
          <div class="container">
            <h1 class="display-4 fw-bold text-white">My Team</h1>
            </div>
        </div>
        <section class="d-flex justify-content-evenly mt-5">
        `
    htmlPage.push(htmlContent);

    for (let i = 0; i < team.length; i++) {
        let card = `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${team[i].name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${team[i].title}</h6>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${team[i].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${team[i].email}">${team[i].email}</a>></li>
              `

        if (team[i].officeNumber) {
            card += `
                <li class="list-group-item">Office#: ${team[i].officeNumber}</li>
                `
        }

        if (team[i].github) {
            card += `
                <li class="list-group-item">Github: <a href="https://github.com/${team[i].github}" target =_blank>${team[i].github}</a></li>
                `
        }

        if (team[i].school) {
            card += `
                <li class="list-group-item">School: ${team[i].school}</li>
                `
        }

        card += `
                </ul>
            </div> 
        </div>
        `

        htmlPage.push(card);
    }

    const htmlFoot = `
            
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
            </body>
            </html>
            `
    htmlPage.push(htmlFoot);

    fs.writeFile('Team.html', htmlPage.join(""), function (err) {

    })
}





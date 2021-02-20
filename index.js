const inquirer = require("inquirer");
const fs = require("fs");

const engineer = require("./classes/Engineer");
const intern = require("./classes/Intern");
const manager = require("./classes/Manager");

function newTeamManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the team managers name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the team managers employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the team managers email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the team managers office number?",
        name: "officenumber",
      },
    ])
    .then(function ({ name, id, email, officenumber }) {
      fs.writeFile(
        "team.html",
        `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
          <link rel="stylesheet" href="style.css">
          <title>Team Profile</title>
      </head>
      <body>
          <nav class="navbar navbar-dark bg-dark mb-5">
              <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
          </nav>
          <div class="container">
              <div class="row" id="appendingRow">
                  <div class="card col-12 col-lg-3 bigCard">
                      <h2>${name}</h2>
                      <h5>Manager</h5>
                      <div class="row">
                          <div class="card col-12 col-lg-12">
                              <div>ID: ${id}</div>
                              <div>Email: ${email}</div>
                              <div>Office #: ${officenumber}</div>
                          </div>
                      </div>
                 </div>
                `,
        function (err, data) {
          if (err) {
            return console.log(err);
          }
          console.log(data);
        }
      );

      nextChoice();
    })

    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
}

function nextChoice() {
  inquirer
    .prompt([
      {
        type: "list",
        message:
          "Please either add an intern, engineer, or complete building your team",
        choices: ["Intern", "Engineer", "Done Building Team"],
        name: "role",
      },
    ])
    .then(function ({ role }) {
      if (role === "Intern") {
        constructIntern();
      } else if (role === "Engineer") {
        constructEngineer();
      } else {
        fileEnd();
      }
    })

    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
}

function constructIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Interns Name",
        name: "name",
      },
      {
        type: "input",
        message: "What is the Interns Employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the Interns email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the Interns school?",
        name: "school",
      },
    ])
    .then(function ({ name, id, email, school }) {
      fs.appendFileSync(
        "team.html",
        `<div class="card col-12 col-lg-3 bigCard">
            <h2>${name}</h2>
            <h5>Intern</h5>
            <div class="row">
                <div class="card col-12 col-lg-12">
                    <div>ID: ${id}</div>
                    <div>Email: ${email}</div>
                    <div>University: ${school}</div>
                </div>
            </div>
        </div>`
      );
      nextChoice();
    })

    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
}

function constructEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Engineers Name",
        name: "name",
      },
      {
        type: "input",
        message: "What is the Engineers Employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the Engineers email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the Engineers github account?",
        name: "github",
      },
    ])
    .then(function ({ name, id, email, github }) {
      fs.appendFileSync(
        "team.html",
        `<div class="card col-12 col-lg-3 bigCard">
            <h2>${name}</h2>
            <h5>Engineer</h5>
            <div class="row">
                <div class="card col-12 col-lg-12">
                    <div>ID: ${id}</div>
                    <div>Email: ${email}</div>
                    <div>GitHub: github.com/${github}</div>
                </div>
            </div>
        </div>`
      );
      nextChoice();
    })

    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
}

function fileEnd() {
  fs.appendFileSync(
    "team.html",
    `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    
</body>
</html>`
  );
}
newTeamManager();

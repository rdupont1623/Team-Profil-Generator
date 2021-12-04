/* Much of the work for this project happens here. 
I am both creating the HTML for the document, the file itself,
and most importantly computing the routes that should activate if
the user selects a certain role. 

List of things to do:
- import classes, inquirer, fs
- initialize employee list - This has been the 
hardest part of this project. I think the best way to
incorporate each employees card into the file is to
make each employee's card an object in an array - 
that way each additional employee card gets pushed
to the array, and every card in that array will have
its contents pushed to the HTML page
- actually create the file using fs - very similar 
to project 7, so I'm going to use the frame
work from that 
 
*/

// Inport npm's
const fs = require("fs");
const inquirer = require("inquirer");


/* Classes in lib folder being imported - the Employee class 
is incorporated into the engineer, intern, and manager
classes, so it will not appear here */
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// initializing employee array

let employeeA = [];

// question about adding another employee 

let nextEmployee = {
    type: 'list',
    name: 'anotherEmp',
    message: 'Would you like to add another employee?',
    choices: ['Engineer', 'Intern', 'that is all of my team']
};

/* questions for everyone to answer - I read a lot
about how to work this data in a way where I can simply
turn certain aspects of the code on or off depending
 on what the user has selected. I ultimatley decided
 to put the questions in arrays, and use the role 
 chosen as an on or off switch for different parts 
 of the code. I felt this was the easiest way to steamline
 the information */

function everyoneQuestions(data) {
    return (questions = [
        {
            type: "input",
            name: "name",
            message: `Please enter this ${data}'s name`,
        },
        {
            type: "input",
            name: "email",
            message: `Please enter this ${data}'s email address`,
        },
        {
            type: "input",
            name: "id",
            message: `Please enter this ${data}'s Employee ID`,
        }
    ]);
};

/* Now the questions specific to certain roles. 
I'm going to later declare that dependent on what 
role was selected to be created, that will determine 
what index of the array should be prompted*/

const specialRole =
    [{
        type: "input",
        name: "engineerGit",
        message: `Please enter this engineer's Github Username`,

    },
    {
        type: "input",
        name: "internSchool",
        message: `Please enter the name of this intern's school`,
    },
    {
        type: "input",
        name: "managerOffice",
        message: ` Please enter the number of this manager's office`,
    }]

/* As previously stated, I wanted to ensure that
the role chosen would opperate as a switch, determing
which further questions should be prompted to the user
- I decided to do this using an if/else if statement, so 
that depending on what role was selected, a certain 
function would fire -- Because this is the last piece 
of information required before we can create our bulma 
cards, I'm just going to lump all of these things together under one 
variable*/

let makeCards = (data) => {

    let RoleFunction = (data) => {

        /* I wanted to try using instanceof operator because I need to get
         more comfortable working with constructors - This took a 
         while to make sense of. It's really just a complicated
         way of saying if we're working with x we do y */

        if (data instanceof Engineer) {
            return data.getGitHub();
        } else if (data instanceof Intern) {
            return data.getSchool();
        } else if (data instanceof Manager) {
            return data.getOfficeNum();
        } else {
            return;
        };
    };

    /* Now we can make the HTML for the cards that will append to our main page, 
     this will include all the template literals that we have 
     already established. These employee cards will be affixed to our mainHTML page */

    let employeeCard =
        ` <div class="column is-3">
        <div class="card text-center">
            <header class="card-header">
                <h1 class="card-title-title">
                    ${data.getRole()} 
                </h1>
            </header>
            <div class="card-content">
                <div class="hero">
                    <h1 class="subtitle employee-name">
                        ${data.name}
                    </h1>
                </div>
                <br>
                <div class="content">
                    <p>ID: ${data.id}</p>
                    <p>Email: <a href="${data.email}" class="text-reset">${data.email}</a></p>
                    <p>${RoleFunction(data)}</p>
                </div>
            </div>
        </div>
    </div>
        `
    return employeeCard;
};

/* Now we're going to layout the HTML of the  Main page - 
The employee cards are the argument being entered into this variable, 
so at the location of the template literal "data" we're affixing the 
employee cards */

const mainPage = (data) => {
    let page =
        `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Team Profile</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
            <link rel="stylesheet" href="./style.css">
        </head>
        <body>
            <section class="hero is-success">
                <div class="hero-body">
                    <h1 class="title has-text-centered">
                        Here is Your Team...
                    </h1>
                </div>
            </section>
            <br>
            <div class="columns is-multiline is-mobile">
                ${data}
            </div>
        </body>
        </html>
        `
    return page;
};

/* Time to actually bring all of the information together and 
build the individual employees depending on what role is selected

First I'm going to initialize the variable of role - Bobby's example in class
had the application start prompting the manager questions, so we're starting there */

let role = "Manager";

/* Then I'm going to establish what questions to ask each specific
role - that is done by utilizing the previously made function 
everyoneQuestions(): here I am essentially saying if we meet the
parameters of being a manager role ect., that we should prompt the
following questions
Finally I'm going to utilize a switch statement, which will land
on the role chosen by the user. This will actually trigger 
the asking of the questions, and the utilization of the classes
in the lib folder that have been imported here.   */



/* we start with the default of manager so the user is first 
prompted to create a manager as seen in the ReadMe example. */

let createEmployee = (role) => {
    let engineerQ = [...everyoneQuestions("Engineer"), specialRole[0], nextEmployee];
    let internQ = [...everyoneQuestions("Intern"), specialRole[1], nextEmployee];
    let managerQ = [...everyoneQuestions("Manager"), specialRole[2], nextEmployee];

    switch (role) {
        case "Engineer":
            inquirer.prompt(engineerQ).then((answers) => {
                let engineer = new Engineer(answers.name, answers.email, answers.id, answers.engineerGit);
                employeeA.push(makeCards(engineer));
                role = answers.anotherEmp;
                createEmployee(role);
            })
            break;
        case "Intern":
            inquirer.prompt(internQ).then((answers) => {
                let intern = new Intern(answers.name, answers.email, answers.id, answers.internSchool);
                employeeA.push(makeCards(intern));
                role = answers.anotherEmp;
                createEmployee(role);
            })
            break;
        case "Manager":
            inquirer.prompt(managerQ).then((answers) => {
                let manager = new Manager(answers.name, answers.email, answers.id, answers.managerOffice);
                employeeA.push(makeCards(manager));
                role = answers.anotherEmp;
                createEmployee(role);
            })
            break;
        case "that is all of my team":
            empString = employeeA.toString();
            writeFile(empString);
    }
}

/* Time to actually initiate the creation of the file!!! 
This is taken almost verbatim from project 7*/

const writeFile = (employeeCard) => {
    let filename = "./dist/index.html";
    let fullHTML = mainPage(employeeCard);

    // Writing the file!
    fs.writeFile(filename, fullHTML, (err) => {
        err ? console.log(err) : console.log("Your file has been created!")
    });
};

// iniializing the prompting of questions when the application is invoked

createEmployee(role);
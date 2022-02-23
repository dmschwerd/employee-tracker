const { prompt } = require("inquirer");
const db = require("./db");
require("console.table");

function givePrompts(){
    prompt([
        {
            type: "list",
            name: "choice",
            message: "Pick an option from the list",
            choices: [
                {
                    name: "View all departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "View all roles",
                     value: "VIEW_ROLES"
                },
                {
                    name: "View all employees",
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "Add department",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "Add role",
                    value: "ADD_ROLE"
                },
                {
                    name: "Add employee",
                    value: "ADD_EMPLOYEE"
                },
                {
                    name: "Update employee role",
                    value: "UPDATE_EMPLOYEE_ROLE"
                },
            ]
        }
    ])
}

function init() {
    givePrompts();
}

init();
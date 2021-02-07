const inquirer = require('inquirer')
var mysql = require('mysql')
const myTable = require('console.table');


//creatiog a connection between database and localhost using port 3306
var connection = mysql.createConnection({
    host: "Localhost",
    port: 3306,
    user: "root",
    password: "177471735@$nM",
    database: "employee_summaryDB"
  });


//calling a fuction for the connection using a specific threadId to run startProgram function
connection.connect( err =>{
    if (err) throw err
    console.log("Connected as Id: " + connection.threadId)
    startPrompt();
 });
 
 //function startPrompt(){inquirer.prompt().then(answer => {..code..});
var startPrompt = () =>{
  inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do?",
      name: "choice",
      choices: [
        "View All Employees?",
        "View All Employee's By Roles?",
        "View all Emplyees By Deparments?", 
        "Add Employee?",
        "Update Employee?",
        "Add Role?",
        "Add Department?",
        "Lay Off Employee?",
        "Employee Badget?",
        "Exit"
      ]
    }
  ]).then(answer => {
    //call a particular functions based on the answer selected from the choice above
    switch (answer.choice) {
      case "View All Employees?":
        viewAllEmployees();
        break;

      case "View All Employee's By Roles?":
        viewAllRoles();
        break;

      case "View all Emplyees By Deparments?":
        viewAllDepartments();
        break;

      case "Add Employee?":
        addEmployee();
        break;

      case "Update Employee?":
        updateEmployeeRole();
        break;

      case "Add Role?":
        addRole();
        break;  

      case "Add Department?":
        addDepartment();
        break;

      case "Lay Off Employee?":
        fireEmployee();
        break;
      case "Employee Badget?":
        employeeBuget();
        break;
      case "Exit":
        exitTracker();

    }
  })
}


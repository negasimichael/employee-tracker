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
//case 1. View All Employees?
var viewAllEmployees = () =>{
  var query = "SELECT employeeT.id, employeeT.first_name, employeeT.last_name, role.title, role.salary, department.name AS Department, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employeeT INNER JOIN  role on role.id = employeeT.role_id INNER JOIN department on department.id = role.department_id left join employeeT e on employeeT.manager_id = e.id;";
  connection.query(query, (err, res) =>{
    if (err) throw err;
    console.log('___________________________________________________________________________________________')
    console.table(res);
    console.log('___________________________________________________________________________________________')
    startPrompt();
  })
}

//case 2. View All Employee's By Roles?
var viewAllRoles = () =>{
  var query = "SELECT employeeT.first_name, employeeT.last_name, role.title AS Title FROM employeeT JOIN role ON employeeT.role_id = role.id;";
  connection.query(query, (err, res) =>{
    if (err) throw err;
    console.log('__________________________________________________________________________________')
    console.table(res);
    console.log('____________________________________________________________________________________')
    startPrompt();
  })
}
//cas 3. View all Emplyees By Deparments
var viewAllDepartments = () =>{
  var query = "SELECT employeeT.first_name, employeeT.last_name, department.name AS Department FROM employeeT JOIN role ON employeeT.role_id = role.id JOIN department ON role.department_id = department.id ORDER BY employeeT.id;";
  connection.query(query, 
  (err, res) =>{
    if (err) throw err;
    console.table(res);
    startPrompt();
  })
}

//case 4. Add Employee?
var addEmployee = () => { 
  inquirer.prompt([
    {
      name: "firstname",
      type: "input",
      message: "What is the employee's first name"
    },
    {
      name: "last_name",
      type: "input",
      message: " What is the employee's last name?"
    },
    {
      name: "role",
      type: "list",
      message: "What is their role? ",
      choices: selectRole()
    },
    {
      name: "choice",
      type: "rawlist",
      message: "What is their managers name?",
      choices: selectManager()
    }
  ]).then(function (val) {
    var roleId = selectRole().indexOf(val.role) + 1
    var managerId = selectManager().indexOf(val.choice) + 1
    var firstName = val.firstname;
    var lastName = val.lastname
    connection.query("INSERT INTO employeeT SET ?", 
      {
        first_name: firstName,
        last_name: lastName,
        manager_id: managerId,
        role_id: roleId
      }, function(err){
        if (err) throw err;
        console.table(val);
        startPrompt();
      })
  })
}


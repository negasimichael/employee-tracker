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
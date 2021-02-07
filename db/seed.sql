-- DEPARTMENT SEEDS -----
INSERT INTO department (name)
VALUE ("Marketing");

INSERT INTO department (name)
VALUE ("Finance");

INSERT INTO department (name)
VALUE ("Management");

INSERT INTO department (name)
VALUE ("Human Resource");

INSERT INTO department (name)
VALUE ("IT");
------------------------------------------------
-- EMPLOYEE ROLE SEEDS -------
INSERT INTO role (title, salary, department_id)
VALUE ("Lead Engineer", 150000, 5);

INSERT INTO role (title, salary, department_id)
VALUE ("Technical Program Manager", 150000, 3);

INSERT INTO role (title, salary, department_id)
VALUE ("Software Engineer", 120000, 5);

INSERT INTO role (title, salary, department_id)
VALUE ("Accountant manager", 150000, 2);

INSERT INTO role (title, salary, department_id)
VALUE ("Senior Software Engineer", 1800000, 5);

INSERT INTO role (title, salary, department_id)
VALUE ("Salesperson", 90000, 1);

INSERT INTO role (title, salary, department_id)
VALUE ("Sales Manager", 120000, 3);

INSERT INTO role (title, salary, department_id)
VALUE ("Recruiter", 200000, 4);

-- EMPLOYEE SEEDS -------
INSERT INTO employeeT (first_name, last_name, manager_id, role_id)
VALUE ("Daniel", "Anderson", null, 1);

INSERT INTO employeeT (first_name, last_name, manager_id, role_id)
VALUE ("Mary", "Wilson", null, 2);

INSERT INTO employeeT (first_name, last_name, manager_id, role_id)
VALUE ("John","Clark",null,3);

INSERT INTO employeeT (first_name, last_name, manager_id, role_id)
VALUE ("Mark", "Taylor", 1, 4);

INSERT INTO employeeT (first_name, last_name, manager_id, role_id)
VALUE ("Sara", "Samuel", 3, 5);

INSERT INTO employeeT (first_name, last_name, manager_id, role_id)
VALUE ("Elizabeth", "Adams", 2, 6);

INSERT INTO employeeT (first_name, last_name, manager_id, role_id)
VALUE ("Solomon", "John", 4, 7);

-- SELECTING all from the three tables 
SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;
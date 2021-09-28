
 /*Creating Employee Class, that takes in name, id, and email
 from values returned from Inquirer prompts */
class Employee {
    name = ""
    id = 0
    email = ""

constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
/* Methods outlined in the ReadMe: I need to export the 
information so it can be used in other functions */
getName() {
    return this.name;
}

getId() {
    return this.id;    
}

getEmail() {
    return this.email;
}
// I think that this is going to be an instance of 
// polymorphism, so I'll set it by default to employee
// and it will be changed in other instances
getRole() {
    return "Employee";
}
    }

module.exports = Employee;
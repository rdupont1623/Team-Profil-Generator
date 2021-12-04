/* The content in the Engineer, Intern, and Manager 
files are all going to be very similar. They are all
extensions of the Employee class, with minor additions 
worked into them. These additions are specified in the 
ReadMe... GetRole() is the only addition that I think
is going to be a hard thing to figure out - Bobby
said it needs to be a polymorphic variable
 */


const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };

    getGitHub() {
        return this.github;
    };

    getRole() {
        return "Engineer";
    };
}

module.exports = Engineer;
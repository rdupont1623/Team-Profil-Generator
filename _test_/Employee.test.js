let { expect } = require('@jest/globals')
let Employee = require('../lib/Employee');


describe("Employee", () => {
    describe("Option Chosen", () => {
        it("Should make an instance of the employee object with a name, id, and email chosen", () => {
            let employee = new Employee("Ryan", 1, "rdupont1623@gmail.com");
            expect(employee.name).toEqual("Ryan");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("rdupont1623@gmail.com");
        });
        it("Should return these values depending on the options chosen", () => {
            let employee = new Employee("Mike", 2, "mike1623@gmail.com");
            let name = employee.getName();
            let id = employee.getId();
            let email = employee.getEmail();
            let role = employee.getRole();

            expect(name).toEqual("Mike");
            expect(id).toEqual(2);
            expect(email).toEqual("mike1623@gmail.com");
            expect(role).toEqual("Employee");
        });
    });

});
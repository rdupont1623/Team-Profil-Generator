let { expect } = require('@jest/globals')
let Manager = require('../lib/Manager');


describe("Manager", () => {
    describe("Option Chosen", () => {
        it("Should make an instance of the manager object with a name, id, email, and office number", () => {
            let manager = new Manager("Ryan", 1, "rdupont1623@gmail.com", "101");
            expect(manager.name).toEqual("Ryan");
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual("rdupont1623@gmail.com");
            expect(manager.officeNum).toEqual("101");
        });
        it("Should return these values depending on the options chosen", () => {
            let manager = new Manager("Mike", 2, "mike1623@gmail.com", "101");
            let name = manager.getName();
            let id = manager.getId();
            let email = manager.getEmail();
            let role = manager.getRole();
            let officeNum = manager.getOfficeNum();

            expect(name).toEqual("Mike");
            expect(id).toEqual(2);
            expect(email).toEqual("mike1623@gmail.com");
            expect(role).toEqual("Manager");
            expect(officeNum).toEqual("101");
        });
    });

});
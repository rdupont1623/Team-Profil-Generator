let { expect } = require('@jest/globals')
let Engineer = require('../lib/Engineer');


describe("Engineer", () => {
    describe("Option Chosen", () => {
        it("Should make an instance of the engineer object with a name, id, email, and github chosen", () => {
            let engineer = new Engineer("Ryan", 1, "rdupont1623@gmail.com", "rdupont1623@github.com");
            expect(engineer.name).toEqual("Ryan");
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual("rdupont1623@gmail.com");
            expect(engineer.github).toEqual("rdupont1623@github.com");
        });
        it("Should return these values depending on the options chosen", () => {
            let engineer = new Engineer("Mike", 2, "mike1623@gmail.com", "mike1623@github.com");
            let name = engineer.getName();
            let id = engineer.getId();
            let email = engineer.getEmail();
            let role = engineer.getRole();
            let github = engineer.getGitHub();

            expect(name).toEqual("Mike");
            expect(id).toEqual(2);
            expect(email).toEqual("mike1623@gmail.com");
            expect(role).toEqual("Engineer");
            expect(github).toEqual("mike1623@github.com");
        });
    });
});
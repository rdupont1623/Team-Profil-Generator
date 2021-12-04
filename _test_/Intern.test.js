let { expect } = require('@jest/globals')
let Intern = require('../lib/Intern');


describe("Intern", () => {
    describe("Option Chosen", () => {
        it("Should make an instance of the intern object with a name, id, email, and school chosen", () => {
            let intern = new Intern("Ryan", 1, "rdupont1623@gmail.com", "STA");
            expect(intern.name).toEqual("Ryan");
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual("rdupont1623@gmail.com");
            expect(intern.school).toEqual("STA");
        });
        it("Should return these values depending on the options chosen", () => {
            let intern = new Intern("Mike", 2, "mike1623@gmail.com", "STA");
            let name = intern.getName();
            let id = intern.getId();
            let email = intern.getEmail();
            let role = intern.getRole();
            let school = intern.getSchool();

            expect(name).toEqual("Mike");
            expect(id).toEqual(2);
            expect(email).toEqual("mike1623@gmail.com");
            expect(role).toEqual("Intern");
            expect(school).toEqual("STA");
        });
    });
});
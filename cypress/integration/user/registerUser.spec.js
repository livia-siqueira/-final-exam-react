/// <reference types="cypress"/>


describe('create user', () => {

    it.skip('registry should work', () => {
        cy.visit("http://localhost:3000/Registration")
        cy.get("[data-cy='inputName']").type("Livia Siqueira")
        cy.get("[data-cy='inputEmail']").type("livia.siqueira@outlook.com")
        cy.get("[data-cy='inputPassword']").type("Livia1234")
        cy.get(".sc-jObWnj").click();

    })
})

describe('create invalid user', () => {

    it.skip('should show an error when the name is empty', () => {
        cy.visit("http://localhost:3000/Registration")
        cy.get("[data-cy='inputEmail']").type("livia.siqueira@outlook.com")
        cy.get("[data-cy='inputPassword']").type("Livia1234")
        cy.get(".sc-jObWnj").click();
    })

    it.skip('should show an error when the email is empty', () => {
        cy.visit("http://localhost:3000/Registration")
        cy.get("[data-cy='inputName']").type("Lívia Siqueira")
        cy.get("[data-cy='inputPassword']").type("Livia1234")
        cy.get(".sc-jObWnj").click();
    })

    it.skip('should show an error when fields are empty ', () => {
        cy.visit("http://localhost:3000/Registration")
        cy.get(".sc-jObWnj").click();
        cy.get("[data-cy='inputName']").should('be.visible')
    })


    it.skip('should show an error when email is invalid', () => {
        cy.visit("http://localhost:3000/Registration")
        cy.get("[data-cy='inputName']").type('Livia Siqueira')
        cy.get("[data-cy='inputEmail']").type("liviasiqueira@outlook..")
        cy.get("[data-cy='inputPassword']").type("Livia1234")
        cy.get(".sc-jObWnj").click();
    })

    it.skip('should show an error when password is invalid', () => {
        cy.visit("http://localhost:3000/Registration")
        cy.get("[data-cy='inputEmail']").type("liviasiqueira@outlook.com")
        cy.get("[data-cy='inputName']").type("Livia Siqueira")
        cy.get("[data-cy='inputPassword']").type("livia")
        cy.get(".sc-jObWnj").click();
    })

    it.skip('should show an error when email is already in use', () => {
        cy.visit("http://localhost:3000/Registration")
        cy.get("[data-cy='inputName']").type("Livia Siqueira")
        cy.get("[data-cy='inputEmail']").type("livia.siqueira@outlook.com")
        cy.get("[data-cy='inputPassword']").type("Livia1234")
        cy.get(".sc-jObWnj").click();   
        cy.url().should("include", "/");
        cy.get(".sc-bBHHxi").click();
        cy.get("[data-cy='inputName']").should('be.visible').type("Vera Siqueira")
        cy.get("[data-cy='inputEmail']").should('be.visible').type("livia.siqueira@outlook.com")
        cy.get("[data-cy='inputPassword']").should('be.visible').type("Vera12345")
        cy.get(".sc-jObWnj").click();

    })
})
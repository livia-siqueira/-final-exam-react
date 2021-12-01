/// <reference types="cypress"/>

describe('must login correctly', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/Registration')
        cy.get("[data-cy='inputName']").type("Livia Siqueira")
        cy.get("[data-cy='inputEmail']").type("livia.siqueira@outlook.com")
        cy.get("[data-cy='inputPassword']").type("Livia1234")
        cy.get('.sc-jObWnj').click()
        cy.url().should('include', '/')
    })

    it.skip('should log in the use', () => {
        cy.get("[data-cy='inputEmail']").type("livia.siqueira@outlook.com")
        cy.get("[data-cy='inputPassword']").type("Livia1234")
        cy.get('.sc-jObWnj').click()
        cy.url().should('include', '/Home')
    })
})

describe('should not login user ', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/Registration')
        cy.get("[data-cy='inputName']").type("Livia Siqueira")
        cy.get("[data-cy='inputEmail']").type("livia.siqueira@outlook.com")
        cy.get("[data-cy='inputPassword']").type("Livia1234")
        cy.get('.sc-jObWnj').click()
    })

    it.skip("should show error because user doesn't exist", () => {
        cy.visit('http://localhost:3000/')
        cy.get("[data-cy='inputEmail']").type("aaaaaaa@outlook.com")
        cy.get("[data-cy='inputPassword']").type("Livia1234")
        cy.get('.sc-jObWnj').should('be.visible').click()
        cy.get('.buttons > :nth-child(1)').should('be.visible').click()
    })

    it("should show error because the user got the password wrong", () => {
        cy.get("[data-cy='inputEmail']").type("livia.siqueira@outlook.com")
        cy.get("[data-cy='inputPassword']").type("Livia12345")
        cy.get('.sc-jObWnj').click()
        cy.get('.buttons > :nth-child(2)').should('be.visible').click()
    
    })

    it.skip("should show error because user does not enter password", () => {
        cy.visit('http://localhost:3000/')
        cy.get("[data-cy='inputEmail']").type("livia.siqueira@outlook.com")
        cy.get('.sc-jObWnj').click()
    })

    it.skip("should show error because fields were not entered", () => {
        cy.get('.sc-jObWnj').click()
    })
})
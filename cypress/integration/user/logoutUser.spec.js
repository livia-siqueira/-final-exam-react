/// <reference types="cypress"/>

describe('logout user', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/Registration')
        cy.get("[data-cy='inputName']").type("Livia Siqueira")
        cy.get("[data-cy='inputEmail']").type("livia.siqueira@outlook.com")
        cy.get("[data-cy='inputPassword']").type("Livia1234")
        cy.get('.sc-jObWnj').click()
    })

    it('must exit successfully', () => {
        cy.get("[data-cy='inputEmail']").type("livia.siqueira@outlook.com")
        cy.get("[data-cy='inputPassword']").type("Livia1234")
        cy.get('.sc-jObWnj').click()
        cy.get('.logout > .sc-bBHxTw').click()
    })
})
/// <reference types="cypress"/>

describe('mega sena automatic', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/Registration')
        cy.get("[data-cy='inputName']").type("Livia Siqueira")
        cy.get("[data-cy='inputEmail']").type("livia.siqueira@outlook.com")
        cy.get("[data-cy='inputPassword']").type("Livia1234")
        cy.get(".sc-jObWnj").click();
        cy.url().should("include", "/");
        cy.get("[data-cy='inputEmail']").type("livia.siqueira@outlook.com")
        cy.get("[data-cy='inputPassword']").type("Livia1234")
        cy.get('.sc-jObWnj').click()

    })

    it.skip('must successfully create mega sena game, but must not save, as the value is less than 30.00', () => {
        cy.get('.sc-jeraig').should('be.visible').click();

        cy.get('.jBAnMi').should('be.visible').click();
        cy.get('.sc-dJjYzT > :nth-child(1)').should('be.visible').click();
        cy.get('.sc-dlVxhl').should('be.visible').click();
        cy.get('.sc-furwcr > button').should('be.visible').click();
    })

    it.skip('must create mega-sena games until reaching 30.00 and save', () => {
        cy.get('.sc-jeraig').should('be.visible').click();
        cy.get("#inputPrice").should('contain.value', 'R$0,00')

        cy.get('.jBAnMi').should('be.visible').click();
        for (let i = 0; i <= 8; i++) {
            cy.get('.sc-dJjYzT > :nth-child(1)').should('be.visible').click();
            cy.get('.sc-dlVxhl').should('be.visible').click();
        }
        cy.get('.sc-furwcr > button').should('be.visible').click();

    })

    it.skip('should be in error, as not enough numbers were selected', () => {
        cy.get('.sc-jeraig').should('be.visible').click();

        cy.get('.jBAnMi').should('be.visible').click();
        for(let i = 1; i <= 4; i++){
            cy.get(`.sc-fFeiMQ > :nth-child(${i})`).should('be.visible').click({ multiple: true });
        }
        cy.get('.sc-dlVxhl').should('be.visible').click();
    })

    it.skip('should have an error because the user is trying to select more numbers', () => {
        cy.get('.sc-jeraig').should('be.visible').click();

        cy.get('.jBAnMi').should('be.visible').click();
        for(let i = 1; i <= 7; i++){
            cy.get(`.sc-fFeiMQ > :nth-child(${i})`).should('be.visible').click({ multiple: true });
        }
    })

    it.skip('must delete bet', () => {
        cy.get('.sc-jeraig').should('be.visible').click();

        cy.get('.jBAnMi').should('be.visible').click();
        for (let i = 0; i <= 3; i++) {
            cy.get('.sc-dJjYzT > :nth-child(1)').should('be.visible').click();
            cy.get('.sc-dlVxhl').should('be.visible').click();
        }
        cy.get(':nth-child(1) > .sc-gWXbKe > .sc-jcFjpl').should('be.visible').click();
    })

    it.skip('must clear bet', () => {
        cy.get('.sc-jeraig').should('be.visible').click();
        cy.get('.jBAnMi').should('be.visible').click();
        for (let i = 1; i <= 3; i++) {
            cy.get(`.sc-fFeiMQ > :nth-child(${i})`).should('be.visible').click({ multiple: true });
        }
        cy.get('.sc-dJjYzT > :nth-child(2)').should('be.visible').click();
    })


})
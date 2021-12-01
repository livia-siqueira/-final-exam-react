/// <reference types="cypress"/>


describe("games", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/Registration')
        cy.get("[data-cy='inputName']").type("Livia Siqueira")
        cy.get("[data-cy='inputEmail']").type("livia.siqueira@outlook.com")
        cy.get("[data-cy='inputPassword']").type("Livia1234")
        cy.get(".sc-jObWnj").click();

        cy.url().should("include", "/");
        cy.get("[data-cy='inputEmail']").type("livia.siqueira@outlook.com")
        cy.get("[data-cy='inputPassword']").type("Livia1234")
        cy.get(".sc-jObWnj").click();
    })

    it.skip("should cart be empty and cart total 0 when rendering for the first time", () => {
        cy.get(".sc-lbhJGD").should("be.visible");
      });

    it.skip("game types should automatically change along with your specs", () => {
        cy.get(".sc-jeraig").click();
        cy.get(".jTUHZx").click();
        cy.get(".jBAnMi").click();
        cy.get(".dNtFMs").click();
    })

    it.skip('must show errors as no numbers have been added to the bet', () => {
        cy.get(".sc-jeraig").click();

        cy.get(".jTUHZx").click();
        cy.get('.sc-dlVxhl').click();

        cy.get(".jBAnMi").click();
        cy.get('.sc-dlVxhl').click();

        cy.get(".dNtFMs").click();
        cy.get('.sc-dlVxhl').click();
    })

    it.skip('must add four bets from each game and save', () => {
        cy.get(".sc-jeraig").click();

        cy.get('.jBAnMi').should('be.visible').click();
        for (let i = 0; i < 3; i++) {
            cy.get('.sc-dJjYzT > :nth-child(1)').should('be.visible').click();
            cy.get('.sc-dlVxhl').should('be.visible').click();
        }

        cy.get('.krxrF').should('be.visible').click();
        for (let i = 0; i < 4; i++) {
            cy.get('.sc-dJjYzT > :nth-child(1)').should('be.visible').click();
            cy.get('.sc-dlVxhl').should('be.visible').click();
        }

        cy.get('.dNtFMs').should('be.visible').click();
        for (let i = 0; i < 4; i++) {
            cy.get('.sc-dJjYzT > :nth-child(1)').should('be.visible').click();
            cy.get('.sc-dlVxhl').should('be.visible').click();
        }
        cy.get('.sc-furwcr > button').should('be.visible').click();
    })

    
    it('must filter', () => {
        cy.get(".sc-jeraig").click();

        cy.get('.jBAnMi').should('be.visible').click();
        for (let i = 0; i < 3; i++) {
            cy.get('.sc-dJjYzT > :nth-child(1)').should('be.visible').click();
            cy.get('.sc-dlVxhl').should('be.visible').click();
        }

        cy.get('.krxrF').should('be.visible').click();
        for (let i = 0; i < 4; i++) {
            cy.get('.sc-dJjYzT > :nth-child(1)').should('be.visible').click();
            cy.get('.sc-dlVxhl').should('be.visible').click();
        }

        cy.get('.dNtFMs').should('be.visible').click();
        for (let i = 0; i < 4; i++) {
            cy.get('.sc-dJjYzT > :nth-child(1)').should('be.visible').click();
            cy.get('.sc-dlVxhl').should('be.visible').click();
        }
        cy.get('.sc-furwcr > button').should('be.visible').click();

        cy.url().should("include", '/Home')
        //add filtro lotofácil
        cy.get('.krxrF').click().click();
        
        //add filtro mega-sena
        cy.get('.jBAnMi').click();

        //elimina filtro lotofácil
        cy.get('.jTUHZx').click();

        //add filtro quina
        cy.get('.dNtFMs').click();

        //elimina filtro mega-sena
        cy.get('.ivmziG').click();

        // add lotofácil
        cy.get('.krxrF').click();

        // add mega-sena
        cy.get('.jBAnMi').click();

        //elimina filtros
        cy.get('.jTUHZx').click();
        cy.get('.ivmziG').click();
        cy.get('.cGOpxE').click();

    })
   
})
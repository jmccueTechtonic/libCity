/// <reference types="Cypress"/>

describe('Star Rating', () => {
    describe('rating when clicked', () => {
        it('clicking one star should adjust the star rating', () => {
            cy.visit('http://localhost:1234/books/add');
            cy.get('#star4').click({force: true});
            cy.get('#star1').should('have.attr', 'fill').should('include', 'yellow');
            cy.get('#star2').should('have.attr', 'fill').should('include', 'yellow');
            cy.get('#star3').should('have.attr', 'fill').should('include', 'yellow');
            cy.get('#star4').should('have.attr', 'fill').should('include', 'yellow');
            cy.get('#star5').should('have.attr', 'fill').should('include', 'rgb(233, 233, 233)');
        });
    });

    describe('rating when hovered', () => {
        it('hovering one star should adjust the star rating', () => {
            cy.visit('http://localhost:1234/books/add');
            cy.get('#star4').trigger('mouseover');
            cy.get('#star1').should('have.attr', 'fill').should('include', 'yellow');
            cy.get('#star2').should('have.attr', 'fill').should('include', 'yellow');
            cy.get('#star3').should('have.attr', 'fill').should('include', 'yellow');
            cy.get('#star4').should('have.attr', 'fill').should('include', 'yellow');
            cy.get('#star5').should('have.attr', 'fill').should('include', 'rgb(233, 233, 233)');
        })
    })
})
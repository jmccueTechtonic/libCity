/// <reference types="Cypress"/>

describe('Home page buttons', () => {
    beforeEach(() => {
      cy.visit('http://localhost:1234/');
    });

    describe('Button `See a book`', () => {
        it('Button `See a book` should go to the bookshelf page', () => {
            cy.get('[data-cy=homePage-to-bookshelf]').click();
            cy.url().should('eq', 'http://localhost:1234/books');
        });
      });

      describe('Button `Add a book`', () => {
        it('Button `Add a book` should go to the add book page', () => {
            cy.get('[data-cy=homePage-to-addBook]').click();
            cy.url().should('eq', 'http://localhost:1234/books/add');
        });
      });

})
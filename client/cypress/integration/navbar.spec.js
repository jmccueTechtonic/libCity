/// <reference types="Cypress"/>

describe('Navbar Qualifications', () => {
    beforeEach(() => {
      cy.visit('http://localhost:1234/');
      cy.get('[data-cy=navBar]').should('exist');
      cy.get('[data-cy=burgerBtn]').should('not.be.visible');
    });
  
    describe('`Home` link', () => {
      it('should return correct url', () => {
        cy.viewport(1280, 720);
        const home = cy.get('[data-cy=link-home]');
        home.click();
        home.should('have.class', 'btn__link');
        cy.url().should('eq', 'http://localhost:1234/');
      });
    });

    describe('`Bookshelf` link', () => {
        it('should return correct url', () => {
          cy.viewport(1280, 720);
          const bookshelf = cy.get('[data-cy=link-books]');
          bookshelf.click();
          bookshelf.should('have.class', 'btn__link');
          cy.url().should('eq', 'http://localhost:1234/books');
        });
      });

      describe('`Add Book` link', () => {
        it('should return correct url', () => {
          cy.viewport(1280, 720);
          const addBook = cy.get('[data-cy=link-addBook]');
          addBook.click();
          addBook.should('have.class', 'btn__link');
          cy.url().should('eq', 'http://localhost:1234/books/add');
        });
      });

      describe('Nav search', () => {
          it('should return correct url via search', () => {
          cy.viewport(1280, 720);
          const search = 'thisRandomBook19999000';

          cy.get('[data-cy=nav-search]').type(search);
          cy.get('[data-cy=nav-searchBtn]').click();
          cy.url().should('eq', `http://localhost:1234/books/${search}`);
          cy.get('[data-cy=nav-search]').should('be.empty');
        });
      });

      describe('Nav Curtain', () => {
          it('burger button and curtain should only have certain classes on click of burger button', () => {
            cy.viewport(560, 720);

            cy.get('[data-cy=burgerBtn]').should('be.visible').should('not.have.class', 'changeBurger');
            cy.get('[data-cy=link-list]').should('not.have.class', 'visible');

            cy.get('[data-cy=burgerBtn]').click();
            cy.get('[data-cy=burgerBtn]').should('have.class', 'changeBurger');
            cy.get('[data-cy=link-list]').should('have.class', 'visible');
          })
      })
})
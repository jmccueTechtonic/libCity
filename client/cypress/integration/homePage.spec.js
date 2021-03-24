/// <reference types="Cypress"/>

describe('is there a home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/');
  });

  // NAVBAR
  it('There should be a navbar', () => {
    cy.get('[data-cy=navBar]').should('exist');
    cy.get('[data-cy=link-home]').should('have.class', 'btn__link');
  });

  // IMAGE
  it('There should be am image', () => {
    cy.get('img.whatAreWe__img').should('exist');
  });

  // BUTTONS
  it('There should be two buttons', () => {
    cy.contains('See a book').should('exist');
    cy.contains('Add book').should('exist');
  });

  it('Button `See a book` should go to the bookshelf page', () => {
    cy.get('[data-cy=homePage-to-bookshelf]').click();
    cy.url().should('eq', 'http://localhost:1234/books');
  });

  it('Button `Add a book` should go to the add book page', () => {
    cy.get('[data-cy=homePage-to-addBook]').click();
    cy.url().should('eq', 'http://localhost:1234/books/add');
  });

  // FOOTER
  it('There should be a footer', () => {
    cy.get('[data-cy=footer]').should('exist');
  });
});

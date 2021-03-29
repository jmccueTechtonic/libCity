/// <reference types="Cypress"/>

describe('is there a home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/');
  });

  describe('Navbar', () => {
    it('There should be a navbar', () => {
      cy.get('[data-cy=navBar]').should('exist');
    });
  })

  describe('Image', () => {
    it('There should be am image', () => {
      cy.get('img.whatAreWe__img').should('exist');
    });
  })
  

  describe('Buttons', () => {
    it('There should be two buttons', () => {
      cy.contains('See a book').should('exist');
      cy.contains('Add book').should('exist');
    });
  })

  describe('Footer', () => {
    it('There should be a footer', () => {
      cy.get('[data-cy=footer]').should('exist');
    });
  })
});

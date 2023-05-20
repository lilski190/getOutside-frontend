import * as constants from '../../src/types/constants';

describe('check if Mappoints are loaded', () => {
    before(() => {
    cy.clearCookies();
    cy.visit(`${Cypress.env('CYPRESS_baseUrl')}/login`);
    cy.get('#login-username').should('be.visible').clear().type('lili');
    cy.get('#login-password').should('be.visible').clear().type('lili');
    cy.get('#login-btn-submit').should('be.visible').click();
    });
  
    it('user should be logged in', () => {
    cy.url().should('eq', `${Cypress.env('CYPRESS_baseUrl')}/home`);
    });

    it('should load the Map Content', () => {
      cy.get('#Map-Container').should('be.visible');
      cy.get('#addMappoint').should('be.visible');
      cy.get('#selectRadius').should('be.visible');
      cy.get('#selectCategories').should('be.visible');
      cy.get('#NavBar').should('be.visible');
    });

    it('should load Select Radius', () => {
            cy.get('#selectRadius').click();
            cy.get('#RadiusHeadline').should('be.visible');
            cy.get('#RadiusDropdownMenu').should('be.visible');
            cy.get('#closePopup').click();
            cy.get('#Map-Container').should('be.visible');
          });

    it('should load Add Mappoint', () => {
          cy.get('#addMappoint').click();
          cy.get('#Map-Container').click('center');
          cy.get('#AddMappointContainer').should('be.visible');
          cy.get('#add-pin-title').type('TestTitle');
          cy.get('#add-pin-category').type('test');
          cy.get('#add-pin-address').type('testAdresse');
          cy.get('#add-pin-description').type('test Beschreibung');
          cy.get('#add-pin-oh-monday').type('12-14');
          cy.get('#add-pin-oh-tuesday').type('12-14');
          cy.get('#add-pin-oh-wednesday').type('12-14');
          cy.get('#add-pin-oh-thursday').type('12-14');
          cy.get('#add-pin-oh-friday').type('12-14');
          cy.get('#add-pin-oh-saturday').type('12-14');
          cy.get('#add-pin-oh-sunday').type('12-14');
          cy.get('#add-point-submit').should('be.visible').click();
          cy.get('#closePopup').click();
          cy.get('#Map-Container').should('be.visible');
        });


    it('should load Filter Mappoints', () => {
      cy.get('#selectCategories').click();
      cy.get('#CategoriesHeadline').should('be.visible');
      cy.get('#showFavorites').should('be.visible');
      cy.get('#selectAll').should('be.visible');
      cy.get('#unselcetAll').should('be.visible');
      cy.get('#ApplyFilter').should('be.visible');
      cy.get('#Categorielist').should('be.visible');
      cy.get('#closePopup').click();
      cy.get('#Map-Container').should('be.visible');
    });

  });
  
  export {};
  
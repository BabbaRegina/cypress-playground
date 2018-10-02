
describe('My first test', function() {
    it('Does not do much!', function() {
        expect(true).to.equal(true);
    })
})

describe('My second test', function() {
    it.skip('Does not do much!', function() {
        expect(true).to.equal(false);
    })
}) 

describe('My third test', function() {

    it('Opens Visit website and finds the content "type" and navigate to new page', function() {
        cy.visit('https://example.cypress.io');

        //cy.pause();

        cy.contains('type').click();

        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/actions');
        cy.log(this.text);
        
         // Get an input, type into it and verify that the value has been updated
        cy.get('.action-email')
        .debug()
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
    })
})

describe('My other test', function() {

    it('Opens Visit website and finds the content "type" and navigate to new page', function() {
        cy.visit('https://example.cypress.io');
        cy.contains('type').click();

        cy.get('.btn.btn-primary').contains('Submit').then(($btn) => {
            const text = $btn.get(0).innerText;
            cy.wrap(text).as('text');
            cy.log(text);
        })

    })
    it('has access to text', function () {
        this.text; // is now available
        cy.log(this.text);
      })
})

describe.skip('Local webpage loads', () => {
    beforeEach(function () {
        // reset and seed the database prior to every test
        cy.exec('npm dosomething')
    }) 

    it('should load the page', () => {
        cy.visit('/');
    })
}) 

describe.skip('if your app uses jQuery', function () {
    ['mouseover', 'mouseout', 'mouseenter', 'mouseleave'].forEach((event) => {
      it('triggers event: ' + event, function () {
        // if your app uses jQuery, then we can trigger a jQuery
        // event that causes the event callback to fire
        cy
          .get('#with-jquery').invoke('trigger', event)
          .get('#messages').should('contain', 'the event ' + event + 'was fired')
      })
    })
  })
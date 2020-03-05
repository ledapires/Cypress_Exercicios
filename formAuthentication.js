it('logar na pagina', function(){
  cy.visit('https://the-internet.herokuapp.com/login')
  cy.get('#username').type('tomsmith')
  cy.get('#password').type('SuperSecretPassword!')
  cy.get('.fa').click()

  cy.get('#flash-messages').should('contain',"You logged into a secure area!")
})

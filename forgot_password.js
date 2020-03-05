it('recupera a senha pelo email', function() {
	cy.visit('https://the-internet.herokuapp.com/forgot_password')
	// todo id é identificado por #. Se for um class é um . ponto
	cy.get('#email').type('cris@mailinator.com')
  cy.get('.icon-2x').click()

  cy.get('#content').should('contain',"Your e-mail's been sent!")
  cy.url().should('contain', 'https://the-internet.herokuapp.com/email_sent')
})

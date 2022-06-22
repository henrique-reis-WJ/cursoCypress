describe('Home Page', function() 
{
    it('app deve estar online', function() 
    {
        cy.viewport(1280, 768)
        cy.visit('https://buger-eats.vercel.app')
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })
})

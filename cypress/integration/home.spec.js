describe('Home Page', ()=> {
    it('app deve estar online', () => {
        cy.viewport(1280, 768)
        cy.visit ('https://buger-eats.vercel.app')
        cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })
})
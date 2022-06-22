describe('Realizar Cadastro', () =>
{
    it('Criar Cadastro', () =>
    {
        cy.viewport(1280, 768)
        cy.visit('https://buger-eats.vercel.app')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var entregador = {
            nome: 'Henrique Ribeiro',
            cpf: '00000000011',
            email: 'henrique.reis@webjump.com.br',
            whatsapp: '11987654321',

            localização: 
                {
                    cep: '03807010',
                    numero: '200',
                    rua: 'Avenida José Muniz Ribeiro',
                    bairro: 'Vila Paranaguá',
                    cidade: 'São Paulo/SP'
                }
        
        }

        // PREENCHIMENTO DE CAMPOS //
        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

        cy.get('input[name="postalcode"]').type(entregador.localização.cep)
        cy.get('input[type=button][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(entregador.localização.numero)

        // VERIFICAÇÃO DOS CAMPOS //
        cy.get('input[name="address"]').should('have.value', entregador.localização.rua)
        cy.get('input[name="district"]').should('have.value', entregador.localização.bairro)
        cy.get('input[name="city-uf"]').should('have.value', entregador.localização.cidade)



    })
})

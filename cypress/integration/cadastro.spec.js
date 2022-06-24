describe('Realizar Cadastro', () =>
{
    it('Criar Cadastro com Sucesso', () =>
    {
        // ACESSAR PAGINA INICIAL //
        cy.viewport(1280, 768)
        cy.visit('https://buger-eats.vercel.app')

        // CLICAR BOTÃO DE CADASTRO // 
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var deliver = {
            name: 'Henrique Ribeiro',
            cpf: '00000000011',
            email: 'henrique.reis@webjump.com.br',
            whatsapp: '11987654321',

            locate: 
                {
                    postalcode: '03807010',
                    number: '200',
                    street: 'Avenida José Muniz Ribeiro',
                    bairro: 'Vila Paranaguá',
                    city: 'São Paulo/SP'
                },

            deliveryMethod: 'Bicicleta',
            cnh: '/images/cnh-digital.jpg'
        
        }
        // PREENCHIMENTO DE CAMPOS //
        cy.get('input[name="name"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.locate.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(deliver.locate.number)

        // VERIFICAÇÃO DOS CAMPOS //
        cy.get('input[name="address"]').should('have.value', deliver.locate.street)
        cy.get('input[name="district"]').should('have.value', deliver.locate.bairro)
        cy.get('input[name="city-uf"]').should('have.value', deliver.locate.city)
        
        // CLICAR BOTÃO VEÍCULO PELA UTILIZANDO A LISTA //
        cy.contains('.delivery-method li', deliver.deliveryMethod).click()

        // UPLOAD DA IMAGEM //
        cy.get('input[accept^="image"]').attachFile(deliver.cnh)
        cy.get('button[class="button-success"]').click()

        // MENSAGEM DE VERIFICAÇÃO //
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage)
    })

    it('Cadastro CPF Inválido', () =>
    {
        // ACESSAR PAGINA INICIAL //
        cy.viewport(1280, 768)
        cy.visit('https://buger-eats.vercel.app')

        // CLICAR BOTÃO DE CADASTRO // 
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var deliver = {
            name: 'Henrique Ribeiro',
            cpf: '000000000kk',
            email: 'henrique.reis@webjump.com.br',
            whatsapp: '11987654321',

            locate: 
                {
                    postalcode: '03807010',
                    number: '200',
                    street: 'Avenida José Muniz Ribeiro',
                    bairro: 'Vila Paranaguá',
                    city: 'São Paulo/SP'
                },

            deliveryMethod: 'Bicicleta',
            cnh: '/images/cnh-digital.jpg'
        
        }

        // PREENCHIMENTO DE CAMPOS //
        cy.get('input[name="name"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.locate.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(deliver.locate.number)

        // VERIFICAÇÃO DOS CAMPOS //
        cy.get('input[name="address"]').should('have.value', deliver.locate.street)
        cy.get('input[name="district"]').should('have.value', deliver.locate.bairro)
        cy.get('input[name="city-uf"]').should('have.value', deliver.locate.city)
        
        // CLICAR BOTÃO VEÍCULO PELA UTILIZANDO A LISTA //
        cy.contains('.delivery-method li', deliver.deliveryMethod).click()

        // UPLOAD DA IMAGEM //
        cy.get('input[accept^="image"]').attachFile(deliver.cnh)

        // CONCLUIR CADASTRO //
        cy.get('form button[type="submit"]').click()

        const errorMessage = 'Oops! CPF inválido'
        cy.get('.alert-error').should('have.text', errorMessage)
    })
})

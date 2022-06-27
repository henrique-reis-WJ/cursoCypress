class SignUpPage {
    go() 
    {
        cy.visit('/')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    fillForm(deliver) 
    {
        cy.get('input[name="name"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)
        cy.get('input[name="postalcode"]').type(deliver.locate.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(deliver.locate.number)

        cy.get('input[name="address"]').should('have.value', deliver.locate.street)
        cy.get('input[name="district"]').should('have.value', deliver.locate.bairro)
        cy.get('input[name="city-uf"]').should('have.value', deliver.locate.city)

        cy.contains('.delivery-method li', deliver.deliveryMethod).click()
        cy.get('input[accept^="image"]').attachFile(deliver.cnh)
    }

    submit() 
    {
        cy.get('button[class="button-success"]').click()
    }

    modalContentShouldBe(expectedMessage) 
    {
        cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage)
    }

    modalErrorMessage(errorMessage)
    {
        cy.get('.alert-error').should('have.text', errorMessage)
    }
}


export default new SignUpPage;
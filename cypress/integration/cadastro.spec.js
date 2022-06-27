import signUp from '../pages/signUpPage'

describe('Realizar Cadastro', () => {

    beforeEach(function()
    {
        cy.fixture('deliver').then((del)=> 
        {
            this.deliver = del
        })

        cy.fixture('messages').then((msn)=> 
        {
            this.messages = msn
        })
    })

    it('Criar Cadastro com Sucesso', function() 
    {
        signUp.go()
        signUp.fillForm(this.deliver.signUpOK)
        signUp.submit()
        signUp.modalContentShouldBe(this.messages.sucessSignUp)
    })
    
    it('Cadastro CPF Inválido', function() 
    {
        signUp.go()
        signUp.fillForm(this.deliver.cpf_inval)
        signUp.submit()
        signUp.modalErrorMessage(this.messages.cpf_inv_msn)
    })
})

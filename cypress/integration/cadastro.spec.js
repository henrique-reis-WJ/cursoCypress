import SignUpPage from '../pages/signUp' 

describe('Realizar Cadastro', () => {
    it('Criar Cadastro com Sucesso', () => 
    {
        var signUp = new SignUpPage()
        signUp.go()

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

        signUp.fillForm(deliver)
        signUp.submit()
        
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signUp.modalContentShouldBe(expectedMessage)
    })
    
    it('Cadastro CPF Inválido', () => 
    {
        var signUp = new SignUpPage()
        signUp.go()

        var deliver = {
            name: 'Henrique Ribeiro',
            cpf: '000000000kk',
            email: 'henrique.reis@webjump.com.br',
            whatsapp: '11987654321',

            locate: {
                postalcode: '03807010',
                number: '200',
                street: 'Avenida José Muniz Ribeiro',
                bairro: 'Vila Paranaguá',
                city: 'São Paulo/SP'
            },

            deliveryMethod: 'Bicicleta',
            cnh: '/images/cnh-digital.jpg'

        }

        signUp.fillForm(deliver)
        signUp.submit()

        const errorMessage = 'Oops! CPF inválido' 
        signUp.modalErrorMessage(errorMessage)
    })
})

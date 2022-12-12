//import SignupPage from '../pages/SignupPage' //importa os códigos, mas para usar precisar criar uma 
//instância da classe como exemplo var signup= new SignupPage
import signup from '../pages/SignupPage' // ja cria com uma nova instancia da classe


describe('Signup', () => {

    beforeEach(function () {
        //signup.go()
        cy.fixture('deliver').then((d) => {
            this.deliver = d
        })

    })


    it('User should be a deliver', function () {


        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        //var signup= new SignupPage()

        signup.go()
        signup.fillForm(this.deliver.signup)
        signup.submit()
        signup.modalContentShoudBe(expectedMessage)


    })

    it('incorrect cpf', function () {

        //const expectedMessage= 'Oops! CPF inválido'

        //var signup = new SignupPage()

        signup.go()
        signup.fillForm(this.deliver.cpf_inv)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')

    })

    it('incorrect email', function () {

        signup.go()
        signup.fillForm(this.deliver.email_inv)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')

    })

})
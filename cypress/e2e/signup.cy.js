//import SignupPage from '../pages/SignupPage' //importa os códigos, mas para usar precisar criar uma 
//instância da classe como exemplo var signup= new SignupPage
import signup from '../pages/SignupPage' // ja cria com uma nova instancia da classe
import signupFactory from '../factories/SignupFactory' // foi necessário mudar nos it() as funções de ()=>
// por function()

describe('Signup', () => {

    /*beforeEach(function () {
        //signup.go()
        cy.fixture('deliver').then((d) => {
            this.deliver = d
        })

    })*/

    /*beforeEach(() => { // deu problema na hora de executar o contexto de Required fields
        signup.go()
    })*/

    //it.skip o comando skip pula o teste definido
    it('User should be a deliver', function () {
        var deliver = signupFactory.deliver()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        //var signup= new SignupPage()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.modalContentShoudBe(expectedMessage)


    })

    it('incorrect cpf', function () {

        var deliver = signupFactory.deliver()
        deliver.cpf = '123456789aa'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')

    })

    it('incorrect email', function () {

        var deliver = signupFactory.deliver()
        deliver.email = 'teste.t.com'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')

    })

    context('Required fields', function () { // cria um contexto com o conteúdo esperado para cada texte e
        // executa dinamicamente cada, impedindo que um erro como o do email interrompa o processo de testes

        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o e-mail' },
            { field: 'email', output: 'É necessário informar o email' },//mensagem correta
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function(){
            signup.go()
            signup.submit()
        })

        messages.forEach(function(msg){

            it(`${msg.field} is required`, function(){
                signup.alertMessageShouldBe((msg.output))
            })
        })
    })

    /*it('Required fields', function () { // it com conteúdo dos testes estatíco podendo causar o problema
        relatado no e-mail
        //signup.go()
        signup.submit()
        signup.alertMessageShouldBe('É necessário informar o nome')
        signup.alertMessageShouldBe('É necessário informar o CPF')
        signup.alertMessageShouldBe('É necessário informar o e-mail')// erro inserido, ao encontrar um erro
        // durante a execução para todo o processo, não executando os outros testes
        signup.alertMessageShouldBe('É necessário informar o CEP')
        signup.alertMessageShouldBe('É necessário informar o número do endereço')
        signup.alertMessageShouldBe('Selecione o método de entrega')
        signup.alertMessageShouldBe('Adicione uma foto da sua CNH')
    })*/

})
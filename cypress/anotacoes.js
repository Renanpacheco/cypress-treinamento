/* rodar o cypress

1- instalar o Node js e o npm;

2- criar a pasta para o projeto;

3- usar o comando (npm init) para iniciar o projeto no formato node;

4- preencer confrome o necessário;

5*- preencher da forma o (test comand: npx cypress open) para quando executar o tester abra a interface grafica
do cypress;

5.5*- observação se precisar na licença colocar MIT é uma licensa open source;

6- instalar o cypress na pasta do projeto com o comando (npm install cypress);

7- usar o comando (npx cypress open) para abrir a interface gráfica do cypress ou o comando npm run test para rodar
os scripts de teste do arquivo package.json, abrindo a interface gráfica do cypress para fazer as configurações iniciais,
de base escolhendo o formato E2E testing e deixando todas as opções marcadas, escolher o navegador e criando um caso de teste padrão pela interface;
podendo fechar a interface após isso;

8- abrir a pasta do projeto em um editor de texto ou IDE; 

9- criar os arquivos de teste no formato nomeTeste.cy.js na pasta 2e2 e depois de editar os arquivos, salvar os mesmos, se a interface estiver aberta o cypress
ja executa automaticamente os testes;

10- caso não esteja executando o cypress podes usar o comando (npx cypress open) para abrir a interface gráfica do cypress ou o comando npm run test para rodar
os scripts de teste do arquivo package.json ou npx cypress run para rodar todos os testes em background.

OBS: passos 5 e 5.5 são opcionais
*/


/* links uteis
* https://www.cypress.io/    site com a documentação e instalação do cypress

* https://docs.cypress.io/guides/overview/why-cypress      site com a documentação do cypress

* https://nodejs.org/en/     site com a documentação e instalação do Nodejs e npm

* https://buger-eats-qa.vercel.app/    site base para esse treinamento

*/

/* comandos de terminal

* npx cypress open abre a intereface grafica do

* node --version

* npm --version 

* npx cypress run //roda os testes em backgroud (sem abrir um navegador visivel), onde coleta os dados em
videos (parando onde ocorreu bug) e screenshots dos bugs sendousado para realizar uma bateria de testes juntos

* npm run test // executa os comandos em test comand: do arquivo de criação do projeto, package.json

* npm install gerador-validador-cpf --save-dev

* npm audit fix  --force

* npm install faker --save-dev

* npm install cypress-file-upload --save-dev

* npm i cypress --save-dev // instala o cypress na PASTA DO PROJETO, e ira colocar em devDepencies do arquivo
package.json junto com outros frameworks usandos pois ele é um framework de desenvolvimento
* npm install cypress --save-dev // instala o cypress na PASTA DO PROJETO, e ira colocar em devDepencies do arquivo
package.json junto com outros frameworks usandos pois ele é um framework de desenvolvimento

* npm init  inicializa um projeto com a estrutura do node

* npx cypress run -b firefox para rodar em um navegador expecifico, obs: deve ter o navegador instalado no pc

*/

/* exemplos de ganchos

before(function(){
    cy.log('Tudo aqui é executado uma ÚNICA vez ANTES DE TODOS os testes')
})

beforeEach(function(){
    cy.log('Tudo aqui é executado uma vez ANTES de Cada CASO de teste')
})

after(function(){
    cy.log('Tudo aqui é executado uma ÚNICA vez DEPOIS  DE TODOS os testes')
})

afterEach(function(){
    cy.log('Tudo aqui é executado uma vez DEPOIS de Cada CASO de teste')
})

*/

// para adicionar o fixture precisei trocar o ()=> por function()
//var b= 'Van/Carro'

        // preenchendo dados iniciais
        /*
        var deliver={
            name: 'Fernando',
            cpf: '12312312312',
            email: 'teste@teste.com',
            whatsapp: '11999999999',
            address: {
                postalcode:'04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'apto 142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            deliver_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }


        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

        // preenchendo endereço
        cy.get('input[name=postalcode').type(entregador.endereco.cep)
        cy.get('input[type="button"][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)

        //validando o buscar cep
        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)


        //selecionando a forma de entrega entre 3 botões
        //cy.contains('.delivery-method li', b).click()
        //cy.contains('.delivery-method li','Bicicleta').click()
        cy.contains('.delivery-method li', entregador.metodo_entrega).click()

        // upload de arquivos 
        //input[accept^="image"] onde o ^ significa "começa com"
        //input[accept$="/*"] onde o $ significa "termina com"
        //input[accept*="ge"] onde o * significa "contem o elemento"

        //cy.get('input[accept^="image"]').attachFile(entregador.cnh) comando para fazer upload do arquivo solto na pasta fixtures
        cy.get('input[accept^="image"]').attachFile('/images/'+ entregador.cnh) // comando para fazer upload do arquivo dentro de uma pasta tomando cuidado com o caminho
        
        // submetendo o form e validando a submição

        cy.get('form button[type="submit"]').click()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        cy.get('div[class="swal2-html-container"]').should('have.text', expectedMessage)*/

       /* cy.get('input[accept^="image"]').selectFile('cypress/fixtures/images/cnh-digital.jpg', {force: true})
        .then(input =>{
            expect(entregador.cnh).to.equal('cnh-digital.jpg')
        })// metodo que ao fazer o upload do aquivo ja valida se realmente subiu, mas esta usando o force, pois
        // a propriedade*/

        /*cy.url().should('be.equal','https://buger-eats.vercel.app/deliver')
        cy.contains('Dados')
        cy.contains('Moto')
        //cy.contains('Cadastrese para  fazer entregas') estudar mais o contains */

        /*it('teste upload', ()=>{
            cy.viewport(1366,768)
            cy.visit('https://buger-eats.vercel.app/')
    
            var entregador={
                name: 'Fernando',
                cpf: '123123123aa',
                email: 'teste@teste.com',
                whatsapp: '11999999999',
                address: {
                    postalcode:'04534011',
                    street: 'Rua Joaquim Floriano',
                    number: '1000',
                    details: 'apto 142',
                    district: 'Itaim Bibi',
                    city_state: 'São Paulo/SP'
                },
                deliver_method: 'Moto',
                cnh: 'cnh-digital.jpg'
            }
            
            cy.get('a[href="/deliver"]').click()
            cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')
    
            cy.get('input[accept^="image"]').selectFile('cypress/fixtures/images/cnh-digital.jpg', {force: true})
            .then(input =>{
                expect(entregador.cnh).to.equal('cnh-digital.jpg')
            })
    
    
        })*/

        /* antes de começar a usar ganchos

        it('usuário deve se tornar um entregador',()=>{

        
            const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
    
            //var signup= new SignupPage()
            
            signup.go()
            signup.fillForm(this.deliver.signup)
            signup.submit()
            signup.modalContentShoudBe(expectedMessage)
    
            
        })
    
        it('cpf incorreto',()=>{
            
            //const expectedMessage= 'Oops! CPF inválido'
            
            //var signup = new SignupPage()
            
            signup.go()
            signup.fillForm(this.deliver.cpf_inv)
            signup.submit()
            signup.alertMessageShouldBeForCPFIncorrect('Oops! CPF inválido')        
            
        })

*/
/*
//antes de mudar para o factory

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
        signup.alertMessageShouldBeForCPFIncorrect('Oops! CPF inválido')

    })

    it('incorrect email', function () {

        signup.go()
        signup.fillForm(this.deliver.email_inv)
        signup.submit()
        signup.alertMessageShouldBeForCPFIncorrect('Oops! Email com formato inválido.')

    })

})
*/

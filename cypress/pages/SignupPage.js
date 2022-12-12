

class SignupPage{

    go(){
        //cy.viewport(1366,768)
        //cy.visit('https://buger-eats.vercel.app/')
        cy.visit('/') //rodar o link base nas configurações
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')
    }

    fillForm(deliver){
       //var b= 'Van/Carro'
       // ao mudar o site para o ambiente de QA os nomes dos localizadores mudou

        // preenchendo dados iniciais
        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        // preenchendo endereço
        cy.get('input[name=postalcode').type(deliver.address.postalcode)
        cy.get('input[type="button"][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        //validando o buscar cep
        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

        //selecionando método de entrega
        cy.contains('.delivery-method li', deliver.deliver_method).click()

        // enviando a cnh
        cy.get('input[accept^="image"]').attachFile('/images/'+ deliver.cnh)  
    }

    submit(){
        cy.get('form button[type="submit"]').click()
    }

    modalContentShoudBe(expectedMessage) {
        cy.get('div[class="swal2-html-container"]').should('have.text', expectedMessage)
    }

    /*alertMessageShouldBeForCPFIncorrect(expectedMessage){
        //validando span do erro para cpf
        cy.get('.alert-error').should('have.text', expectedMessage)
    }*/
    alertMessageShouldBe(expectedMessage){
        //validando span do erro
        //cy.get('.alert-error').should('have.text', expectedMessage)
        cy.contains('.alert-error', expectedMessage).should('be.visible') //faz a combinação de cada localizador
        // .alert-error com a expectedMessage, devendo a expectedMessage ser visivel
    }


}

//export default SignupPage; // precisando criar instancias da classe no código principal como exemplo
// var singup= new SignupPage 
export default new SignupPage; // ja cria com uma nova instancia da classe quando importar
var faker = require('faker') // cria dados aleatorios, mas precisa instalar essa biblioteca
var cpf= require('gerador-validador-cpf')

export default {   


    deliver: function() {
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11999999999',
            address: {
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'apto 142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            deliver_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
            
    }

}



//sem o faker
/*export default {

    deliver: function() {
        var data = {
            name: 'Fernando',
            cpf: '12312312312',
            email: 'teste@teste.com',
            whatsapp: '11999999999',
            address: {
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'apto 142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            deliver_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
            
    }

}*/
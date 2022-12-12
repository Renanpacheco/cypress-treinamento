

describe('home page',()=>{
  it('app deve star online',()=>{
    cy.visit('/')
    cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')

    
    /*cy.get('#page-home main')
    cy.get('main')
    cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    cy.get('#page-home')
    cy.get('img')
    cy.get('p')
    cy.get('a')
    cy.get('strong')
    cy.get('main')
    cy.contains('Seja')*/
      
  })
})
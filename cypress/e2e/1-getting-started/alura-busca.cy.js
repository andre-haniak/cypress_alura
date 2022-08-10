describe('alura busca cursos', () => {

    beforeEach(() => {
        cy.visit('https://www.alura.com.br')
    })

    it('buscar curso de Java', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('Python')
        cy.get('.header-barraBusca-form-submit').click()
        cy.get('h4.busca-resultado-nome')
        .should(
            'contain',
            'Formação Python  e orientação a objetos')
    });
})
describe('alura busca cursos', () => {

    beforeEach(() => {
        cy.visit('https://www.alura.com.br')
    })

    it('buscar curso de Java', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('Python')
        cy.get('.header-barraBusca-form-submit').click()
        cy.get(':nth-child(2) > .busca-resultado-link > .busca-resultado-container > .busca-resultado-nome')
        .should(
            'have.text',
            'Formação Python  e orientação a objetos')
    });
})
describe('Login de usuários alura pic', () =>{

    beforeEach(() => {
        cy.visit('/user/login');
    });

    it('fazer login de usuário válido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.contains('a', '(Logout)').should('be.visible')
    });

    it('fazer login de usuário inválido', () => {
        cy.login('assainks', '123456')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    });
})
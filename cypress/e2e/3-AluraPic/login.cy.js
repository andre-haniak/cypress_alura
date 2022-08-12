describe('Login de usuários alura pic', () =>{

    beforeEach(() => {
        cy.visit('/');
    });

    it('fazer login de usuário válido', () => {
        cy.login('hurackks', '12345678')
        cy.contains('a', '(Logout)').should('be.visible')
    });

    it('fazer login de usuário inválido', () => {
        cy.login('assainks', '123456')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    });
})
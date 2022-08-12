describe('Funcionalidades do alura pic', () =>{

    beforeEach(() => {
        cy.visit('/');
    });
    
    it('Verifica mensagens tela inicial', () => {
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
        cy.get('button[type="submit"]').should('be.disabled')
    });
})
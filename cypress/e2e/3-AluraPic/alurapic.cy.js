describe('Login e registro de usuários alura pic', () =>{

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
    });
    
    it('Verifica mensagens de validacão', () => {
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
    });

    it('Verifica mensagens de email inválido', () => {
        cy.contains('a', 'Register now').click()
        cy.get('input[formcontrolname="email"]').type('Assainks')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible')
    });

    it('Verifica mensagens de senha com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').click()
        cy.get('input[formcontrolname="password"]').type('12345')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible')
    });

    it('Verifica mensagem de usuário está com letra maiúscula', () => {
        cy.contains('a', 'Register now').click()
        cy.get('input[formcontrolname="userName"]').type('Assainks')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible')
    });

    it.only('fazer login de usuário válido', () => {
        cy.login('assainks', '12345678')
        cy.contains('a', '(Logout)').should('be.visible')
    });

    it.only('fazer login de usuário inválido', () => {
        cy.login('assainks', '123456')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    });
})
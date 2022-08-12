describe('Cadastro de usuários alura pic', () =>{

    beforeEach(() => {
        cy.visit('/');
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

    const users = require('../../fixtures/users.json')

    users.forEach(user => {
        it(`Registro do ${user.fullName}`, () => {
            cy.registro(user.fullName, user.userName, user.password, user.email)
        });
    });

    it('Registro de usuário já cadastrado', () => {
        cy.registro('flavio', 'flavio', '12345678', 'flavio@alura.com')
        cy.contains('ap-vmessage', 'Username already taken').should('be.visible')
    });
})
describe('Buscar fotos e dados', () => {

    it('Buscar fotos', () => {
        cy.request({
            method: 'GET',
            url: 'https://apialurapic.herokuapp.com/hurackks/photos',
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equal('Farol iluminado')
        })
    });
})
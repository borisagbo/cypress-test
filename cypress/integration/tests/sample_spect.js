describe('My First Test',function (){
    it('click an element',function () {
        cy.visit('http://localhost:3001/')

        cy.contains('Examples').click()

        cy.url()
            .should("include","/page2")
    })
})


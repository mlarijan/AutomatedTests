describe('Creating an account', () => {
    it.only ('TC01. Creating an account with valid email adress', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('[title="Log in to your customer account"]').as('SignInBtnMainPage').click()
        cy.get("#email_create").type('dygantmariusz2@gmail.com')
        cy.get('#SubmitCreate').click() 

    })
})
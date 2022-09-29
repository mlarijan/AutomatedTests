describe('CheckNewsletter.js', () => {
    it('TC01. Check if the newsletter is working properly when we input valid, not registered email adress', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('[name="email"]').type('validNewEmail@gmail.com')
        cy.get('[name="submitNewsletter"]').click()
        cy.get('.alert-success').contains("Newsletter : You have successfully subscribed to this newsletter.")

    });
})

describe('Testing Login', () => {
    it('TC01. Check if we can log in with valid user name and password. Account exists.', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('[name="email"]').type('validNewEmail@gmail.com')
        cy.get('[name="submitNewsletter"]').click()
        cy.get('.alert-success').contains("Newsletter : You have successfully subscribed to this newsletter.")

    });
})
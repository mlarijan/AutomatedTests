describe('Testing Login', () => {
    it('TC01. Check if we can log in with valid email and valid password. The account exists. Check if we enter "my account" page.', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('[title="Log in to your customer account"]').as('SignInBtnMainPage')
        cy.get('@SignInBtnMainPage').click()
        cy.get("#email").type('dygantmariusz2@gmail.com')
        cy.get("#passwd").type('haslo123')
        cy.get('#SubmitLogin').click()
        cy.url().should('include', '/index.php?controller=my-account')
    })

    it("TC02. Check if we can log in with valid email and valid password. The account doesn't exist. Check error message.", () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('[title="Log in to your customer account"]').as('SignInBtnMainPage')
        cy.get('@SignInBtnMainPage').click()
        cy.get("#email").type('validEmail@gmail.com')
        cy.get("#passwd").type('validPassword')
        cy.get('#SubmitLogin').click()
        cy.get("li").parents("ol").find("li").should('contain','Authentication failed.')
     })

    it("TC03. Check if we can log in with invalid email and valid password. Check error message.", () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('[title="Log in to your customer account"]').as('SignInBtnMainPage')
        cy.get('@SignInBtnMainPage').click()
        cy.get("#email").type('invalidEmailgmail.com')
        cy.get("#passwd").type('validPassword')
        cy.get('#SubmitLogin').click()
        cy.get("li").parents("ol").find("li").should('contain','Invalid email address.')
    })


    it("TC04. Check if we can log in with valid email and invalid password. Check error message.", () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('[title="Log in to your customer account"]').as('SignInBtnMainPage')
        cy.get('@SignInBtnMainPage').click()
        cy.get("#email").type('validEmail@gmail.com')
        cy.get("#passwd").type('iP')
        cy.get('#SubmitLogin').click()
        cy.get("li").parents("ol").find("li").should('contain','Invalid password.')
    })

    it("TC05. Check if we can log in with invalid email and invalid password. Check if there are two error messages. Check error messages.", () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('[title="Log in to your customer account"]').as('SignInBtnMainPage')
        cy.get('@SignInBtnMainPage').click()
        cy.get("#email").type('invalidEmailgmail.com')
        cy.get("#passwd").type('iP')
        cy.get('#SubmitLogin').click()
        cy.get("li").parent("ol").find("li").eq(0).should('contain','Invalid email address.')
        cy.get("li").parent("ol").find("li").eq(1).should('contain','Invalid password.')
    })
})

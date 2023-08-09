import loginPageElements from '../fixtures/loginPage'
const { elements } = loginPageElements
class LoginPage {
    login(userName, passWord, invalidUser) {
        cy.get(elements.signInBtn).click( {force: true} )
        cy.get(elements.userNameField).focus()
        cy.get(elements.userNameField).should('be.visible').and('be.enabled').click().type(userName)
        cy.get(elements.passwordField).should('be.visible').type(passWord)
        cy.contains('button', elements.loginBtn).click()
        if (invalidUser == false) {
            cy.on('window:alert', (message) => {
                // Verify and capture the alert message
                expect(message).to.equal('User does not exist.');
            })
        } else{
            cy.get(elements.logOutBtn).click()
        }
    }
}

export const loginPage = new LoginPage()
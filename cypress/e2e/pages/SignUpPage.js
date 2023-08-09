import signUpForm from '../../fixtures/signUpData'

class SignUpPage {
    signUpForm(userName, passWord, newUser) {

        cy.wait(2000)
        cy.get(signUpForm.signUp).click()
        cy.get(signUpForm.userName).focus().clear().click()
        cy.get(signUpForm.userName).clear().type(userName)
        cy.get(signUpForm.passWord).type(passWord)
        cy.contains('button', signUpForm.signUpBtn).click().then(() => {
            cy.wait(2000)
            if (newUser) {
                cy.on('window:alert', (message) => {
                    expect(message).to.equal('Sign up successful.');
                })
            } else {
                cy.on('window:alert', (message) => {
                    expect(message).to.equal('This user already exist.');
                    cy.get(signUpForm.colseBtn).click()
                })
            }
        })
    }
}

export const signUpPage = new SignUpPage()

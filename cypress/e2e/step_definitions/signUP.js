import { loginPage } from '../../support/login'
import loginPageElements from '../../fixtures/loginPage'
import { signUpPage } from '../pages/SignUpPage'
import { generate_random } from '../../support/generateRandom'

let userName = ''
let passWord = ''

describe('Sign Up Test', () => {
  it('Access https://www.demoblaze.com/', () => {
    cy.visit('/')
  })

  it('Sign Up as a new user', () => {
    userName = generate_random()
    passWord = generate_random()
    signUpPage.signUpForm(userName, passWord, true)
  });

  it('Validate if you try signup with same user modal will appear ', () => {
    signUpPage.signUpForm(userName, passWord)
  });

  it('Log in', () => {
    loginPage.login(userName, passWord)
  });

  it('Log out', () => {
    
  });

  it('Try logging in with invalid user ', () => {
    loginPage.login(generate_random(), generate_random(), false)
  });
})

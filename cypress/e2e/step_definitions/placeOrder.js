import { orderPage } from '../pages/Orderpage'
import { loginPage } from '../../support/login'
import { signUpPage } from '../pages/SignUpPage'
import { generate_random } from '../../support/generateRandom'

let userName = ''
let passWord = ''

describe('Sign Up Test', () => {
    it('Access https://www.demoblaze.com/', () => {
        cy.visit('/')
    })

    it('Log in', () => {
        userName = generate_random()
        passWord = generate_random()
        signUpPage.signUpForm(userName, passWord, true)
        loginPage.login(userName, passWord)
    });

    it('Go to phones', () => {
        cy.contains('Phones').click()
    });

    it('Click on Any phone', () => {
        orderPage.selectProducts('Nexus 6')
    });

    it('Add to cart', () => {
        orderPage.addToCart()
    });


    it('Go to another phone and add it to cart', () => {
        orderPage.selectProducts('Samsung galaxy s6')

    });

    it('Go to cart and remove one item', () => {
        orderPage.removeItem()
    });

    it('Place order and populate modal', () => {
        orderPage.purchaseBtn()
        orderPage.typeName()
        orderPage.typeCountry()
        orderPage.typeCity()
        orderPage.typeCardNumber()
        orderPage.typeMonth()
        orderPage.typeYear()
        orderPage.confirmPurchase()
    });

    it('Validate charged information', () => {
        orderPage.validateInformations()
    });
});


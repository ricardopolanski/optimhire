import placeOrderData from '../../fixtures/cartData'
const { elements, orderInformation } = placeOrderData;
const maxRetries = 3
class OrderPage {

    addToCart(){
        cy.contains('Add to cart').click()
        cy.go('back');
        cy.go('back');
    }

    selectProducts(product){
        cy.contains('Phones').click()
        cy.contains('.hrefch', product).click();
        cy.contains('Add to cart').click()
    }

    removeItem(){
        cy.get('#cartur').click()
        cy.contains('tr', 'Nexus 6').find('a:contains("Delete")').click();
    }

    purchaseBtn() {
        cy.contains(elements.placeOrderBtn).click()
    }

    typeName() {
        cy.wait(2000)
        cy.get(elements.nameField).focus()
        cy.get(elements.nameField).focus().clear().type(orderInformation.name)


        cy.get(elements.nameField).then($input => {
            let retries = maxRetries;
            while ($input.val() !== orderInformation.name && retries > 0) {
                cy.get(elements.nameField).clear().type(orderInformation.name);
                retries--;
            }
            // expect($input.val()).to.equal(orderInformation.name);
            if ($input.val() !== orderInformation.name) {
                this.typeName()
            }
        });
    }

    typeCountry() {
        cy.get(elements.countryField).click().type(orderInformation.country)
    }

    typeCity() {
        cy.get(elements.cityField).click().type(orderInformation.city)
    }

    typeCardNumber() {
        cy.get(elements.cardNumberField).click().type(orderInformation.cardNumber)
    }

    typeMonth() {
        cy.get(elements.monthField).click().type(orderInformation.month)
    }

    typeYear() {
        cy.get(elements.yearField).click().type(orderInformation.year)
    }

    confirmPurchase() {
        cy.contains(elements.purchaseBtn).click()
        cy.contains(elements.sucessMsg).should('be.visible')
    }

    validateInformations() {
        cy.get(elements.popUp).should('have.attr', 'style', 'display: block;').then($el => {
            const text = $el.text();
            const amountMatch = text.match(/Amount: (\d+)/);
            const cardNumberMatch = text.match(/Card Number: (\d+)/);
            const nameMatch = text.match(/Name: ([^\n]+)Date:/);
            const amount = amountMatch ? amountMatch[1] : '';
            const cardNumber = cardNumberMatch ? cardNumberMatch[1] : '';
            const name = nameMatch ? nameMatch[1] : '';

            
            expect(cardNumber).to.be.equal(orderInformation.cardNumber)
            expect(name).to.be.equal(orderInformation.name)
        })
        cy.get(elements.countryField).should('value', orderInformation.country)
    };
}

export const orderPage = new OrderPage()
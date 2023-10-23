import BasePage from './base.page';

class ShopPage extends BasePage {
  filterButton(index = 0) {
    return cy.get('.price_slider_amount > button').eq(index);
  }

  get priceSlider() {
    return cy.get('.price_slider > span').last();
  }

  get allPrices() {
    return cy.get('.price > span');
  }

  get allSalePrices() {
    return cy.get('ins > .woocommerce-Price-amount');
  }

  get sort() {
    return cy.get('.orderby');
  }

  get productLocator(){
    return cy.get('cat-item cat-item-24');
  }

  returnProduct(name) {
  switch (name) {
    case "android":
       return cy.get('li.cat-item-24 a');
    case "HTML":
       return cy.get('li.cat-item-19 a');
    case "JavaScript":
       return cy.get('li.cat-item-21 a');
    case "selenium":
       return cy.get('li.cat-item-17 a');
    }
  }
}

export default new ShopPage();

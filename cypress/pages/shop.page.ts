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

  get sortLowToHigh() {
    return cy.get('.orderby > option[value="price"]');
  }
}

export default new ShopPage();

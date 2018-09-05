let HeaderPage = require("./page_header.js");

let addProdLinkLocator = "a.section-body__actions";

class ProductsPage {
    constructor() {
        this.header = new HeaderPage();
        browser.waitForAngularEnabled(false);
    }

    getAddProduct() {
        return element(by.css(addProdLinkLocator));
    }   
}

module.exports = ProductsPage;
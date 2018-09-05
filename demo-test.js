let LoginPage = require("../page_objects/login_page.js");

describe('login suite', function() {
    it('login pass test', async function() {
      let loginPage = new LoginPage();

      await loginPage.open();
      allure.createStep('login', function() {})();

      let productsPage = await loginPage.login("persevalif@gmail.com", "N<f&nx39V");

      console.log(productsPage.header + '+++++++++++++++');
      await browser.sleep(5000);
  
     expect(await productsPage.header.isHeaderVisible()).toEqual(true);
    });
  });
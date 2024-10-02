exports.inventoryPage = class inventoryPage {
    constructor(page) {
        this.page = page;
        this.sort_btn = page.locator("//select[@class='product_sort_container']");
        this.firstProduct = page.locator("//button[@id='add-to-cart-sauce-labs-onesie']");
        this.secondProduct = page.locator("//button[@id='add-to-cart-sauce-labs-bike-light']");
        this.thirdProduct = page.locator("//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']");
        this.cart_btn = page.locator("//a[@class='shopping_cart_link']");
        this.ClickCheckout = page.locator("//button[@id='checkout']");

        this.firstName=  page.locator("//input[@data-test='firstName']");
        this.lastName = page.locator("//input[@data-test='lastName']");
        this.zip_code = page.locator("//input[@data-test='postalCode']");
        this.continueBtn = page.locator("//input[@id='continue']");
    
        
    }

    async inventory() {
        //
        //Click on the sort button 
        await this.sort_btn.click();

        //Select price from low to high
        await this.page.waitForSelector("//select[@class='product_sort_container']", {timeout: 3000});
        await this.sort_btn.selectOption({index: 2});

        //Click on first and second product
        await this.page.waitForSelector("//button[@id='add-to-cart-sauce-labs-onesie']",{timeout: 3000});
        await this.firstProduct.click();

        await this.page.waitForSelector("//button[@id='add-to-cart-sauce-labs-bike-light']",{timeout: 3000});
        await this.thirdProduct.click();

        //Click on the cart button
        await this.page.waitForSelector("//a[@class='shopping_cart_link']",{timeout: 3000});
        await this.cart_btn.click();

        //Click on the checkout button
        await this.page.waitForSelector("//button[@data-test='checkout']",{timeout: 3000});
        await this.ClickCheckout.click();
    }

    async detailsInput (firstname, lastname, zipcode) {

        await this.page.waitForSelector("//input[@data-test='firstName']");
         await this.firstName.fill(firstname);
 
         await this.page.waitForSelector("//input[@data-test='lastName']");
         await this.lastName.fill(lastname);
 
         await this.page.waitForSelector("//input[@data-test='postalCode']");
         await this.zip_code.fill(zipcode);
 
         await this.continueBtn.click();
     }
 


}
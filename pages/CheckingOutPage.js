 exports.checkingOutPage = class checkingOutPage {
    constructor(page) {
         this.page = page;
         this.firstName=  page.locator("//input[@data-test='firstName']");
         this.lastName = page.locator("//input[@data-test='lastName']");
         this.zip_code = page.locator("//input[@data-test='postalCode']");
         this.continueBtn = page.locator("//input[@id='continue']");
         this.overView_btn = page.locator("//button[@id='finish']");
         this.backToHome_btn = page.locator("//button[@id='back-to-products']");
         this.menu_btn = page.locator("//button[@id='react-burger-menu-btn']");
         this.logOut_btn = page.locator("//a[@id='logout_sidebar_link']");
    
    }

    //fill in the name and zipcode
    async detailsInput (firstname, lastname, zipcode) {

      //fill in the first name
       await this.page.waitForSelector("//input[@data-test='firstName']");
       await this.firstName.fill(firstname);

       //fill in the last name
        await this.page.waitForSelector("//input[@data-test='lastName']");
        await this.lastName.fill(lastname);

        // fill in the zipcode
        await this.page.waitForSelector("//input[@data-test='postalCode']");
        await this.zip_code.fill(zipcode);

        // click on the continue button 
        await this.continueBtn.click();

    }

    async loggingOut () {
      
      // click on the continue button in the overview section
      await this.page.waitForSelector("//button[@id='finish']");
      await this.overView_btn.click();
      
      // click on the back to home button
      await this.page.waitForSelector("//button[@id='back-to-products']");
      await this.backToHome_btn.click();  

      // click on the menu button
      await this.page.waitForSelector("//button[@id='react-burger-menu-btn']");
      await this.menu_btn.click();

      // click on the log out button
      await this.page.waitForSelector("//a[@id='logout_sidebar_link']");
      await this.logOut_btn.click();

    }


 }


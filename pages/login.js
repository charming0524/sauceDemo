const { expect } = require("@playwright/test");

exports.loginpage = class loginpage {
    constructor(page){
        this.page = page;
        this.brandLogo = page.locator("//div[@class='login_logo']");
        this.username_box = page.locator("//input[@id='user-name']");
        this.password_box = page.locator("//input[@id='password']");
        this.login_btn = page.locator("//input[@id='login-button']");
    }

     // Navigate to the base URL before the test 
    async gotoLogin() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    //login with the username and password
    async login(username, password) {
        await expect(this.brandLogo).toBeVisible();

        await this.page.waitForSelector("//input[@id='user-name']", {timeout : 3000});
        await this.username_box.fill(username);

        await this.page.waitForSelector("//input[@id='password']", {timeout : 3000});
        await this.password_box.fill(password);

        await this.page.waitForSelector("//input[@id='login-button']", {timeout : 3000});
        await this.login_btn.click();

    }


}
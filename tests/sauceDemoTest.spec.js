import {test, expect} from '@playwright/test';
import { loginpage } from '../pages/login';
import { inventoryPage } from '../pages/inventory';
import { checkingOutPage } from '../pages/CheckingOutPage';


test('sauce demo testing', async ({page}) => {
    test.setTimeout(60000);
    

    const Login = new loginpage(page);

    //Navigate to the the base Url
    await Login.gotoLogin();

    //login in with the username and password
    await Login.login('standard_user', 'secret_sauce');

    //navigate to the inventory page
    const Invent = new inventoryPage(page);

    // assert that the page as the right url which shows it'a the right page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // assert that the page title is visible
    await expect(page.locator("//span[@class='title']")).toBeVisible();

    // perform the necessary actions 
    await Invent.inventory();

    // navigate to the checking out page and the overview page
    const Checkout = new checkingOutPage(page);

    // click on the checking out button and fill in the details 
    await Checkout.detailsInput('Adeola', 'Oni', '32123');

    // navigate back to home and log out 
    await Checkout.loggingOut();

    //test.slow();
    await page.waitForTimeout(7000);


});


import {test,expect} from "@playwright/test"


test("Test for HRM Login and logout with xpath",async({page})=>{

    //open application
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //username
    await page.locator("//input[@name='username']").fill("Admin");

    //password
    await page.locator("//input[@type='password']").fill("admin123");

    //login
    await page.locator("//button[@type='submit']").click();

    //assert  the current url
    await expect(page).toHaveURL(/dashboard/);
    console.log("User navigated to Dashboard page!");
    
    //logout
    //click on arrow: xpath with contains()
    await page.locator("//i[contains(@class,'oxd-userdropdown-icon')]").click();

    //click on logout: xpath with text()
    await page.locator("//a[text()='Logout']").click();




await page.waitForTimeout(2000);

})

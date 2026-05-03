

import{Browser, chromium, Page, test} from "@playwright/test";

test("Test for Google chrome",async({})=>{

    //open chrome browser
 
        let browser:Browser=await chromium.launch({headless:false,channel:"chrome"});

        //open new page
        let page:Page=await browser.newPage();

        //open application
        await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");

        await page.waitForTimeout(2000);

})
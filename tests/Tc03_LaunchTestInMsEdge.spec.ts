



import {test,Browser,Page, chromium} from "@playwright/test"

test("Test to launch microsoft edge browser",async({})=>{

        //open browser
        let browser:Browser=await chromium.launch({headless:false,channel:"msedge"});

            //browser--->page
           let page:Page=await browser.newPage();

           //open application
           await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");

            //static wait 
          await page.waitForTimeout(2000);



})
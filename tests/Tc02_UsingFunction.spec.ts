


import {Browser, chromium,Page} from "@playwright/test"

///IIFE
(async()=>{

    //open chrome browser 
    let browser:Browser=await chromium.launch({headless:false,channel:"chrome"});

    //browser-->open new tab(page)
    let page:Page=await browser.newPage();
    
    //page-->open application
    await page.goto("https://www.google.com/");




})();
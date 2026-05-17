
import {test,expect, Locator} from "@playwright/test"

//allInnerText():Promise<string[]>:Returns an array of node.innerText values for all matching nodes.
//count():Promise<number>: Returns the number of elements matching the locator.

//all():Promise<Locator[]>:When the locator points to a list of elements, this returns an array of locators, pointing to their respective elements.

test("Test for multiple elements like menu with allInnerText()",async({page})=>{

    //open app
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");

     let allElements=await page.locator("div.list-group>a").count();
     console.log("Total elements: "+allElements);//13
     
     //get the text() of every element and print 
    let allOptions:string[]=await page.locator("div.list-group>a").allInnerTexts();
    console.log("Total Elements are: "+allOptions.length);//13

    //for...of loop
    for(let i of allOptions)//i strores string
    {
        console.log(i);
        
    }

  
   
await page.waitForTimeout(2000);

})




test.only("Test for multiple elements like menu with all()",async({page})=>{

    //open app
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");

     let allElements=await page.locator("div.list-group>a").count();
     console.log("Total elements: "+allElements);//13
     
     //get the elements and its text and perform action 
    let allOptions:Locator[]=await page.locator("div.list-group>a").all();
    console.log("Total Elements are: "+allOptions.length);//13

    //for...of loop
    for(let i of allOptions)// here i store element
    {
        console.log("Text: "+await i.innerText());

        if((await i.innerText()).includes("Forgotten Password"))
        {
            console.log("Eelement found......");
            
            //click on
            await i.click();
            break;
        }
       
    }

  
   
await page.waitForTimeout(2000);

})
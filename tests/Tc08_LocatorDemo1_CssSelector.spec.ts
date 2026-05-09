
import {test,expect, Locator} from "@playwright/test"
import { serialize } from "node:v8";

test("Identify Element using CssSelector",async({page})=>{

    //open application
    await page.goto("https://www.google.com/");

    //searchbox:cssSelector with id
    //IdentifyElement +perform action
    //await page.locator("#APjFqb").fill("Playwright");



  //identify element + store it +perform action
  let searchBox:Locator=page.locator("#APjFqb");

  console.log("Is searchbox visible?: "+await searchBox.isVisible());//true
  console.log("Is searchbox editable?: "+await searchBox.isEditable());//true
  console.log("Is searchbox enabled?: "+await searchBox.isEnabled());//true

  if(await searchBox.isVisible() && await searchBox.isEnabled() && await searchBox.isEditable())
  {
    await searchBox.fill("Javascript");
  }
  
  

  await page.waitForTimeout(2000);
})
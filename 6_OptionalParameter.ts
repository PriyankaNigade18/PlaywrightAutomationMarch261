

/*
 * Optional Parameters
 * ------------------------
 * In function we can pass parameters but sometimes suppose
 * we dont wanted to pass parameter in function then we can design
 * optional parameter
 * 
 * optional parameter syntax(?)
 * ------------------------
 * age?:number
 * 
 * multiple optional parameter you can add
 * optional parameter always its a last parameter of function
 * 
 * 
 */

function getData(name:string,age?:number)
{
    console.log("Name is: "+name);

    if(age)
    {
    console.log("Age is: "+age);
    }
   
    
}

//call
getData("Jay",12);
getData("Sumit");

//Scenario: run test case with or without browser(headless)

function launchBrowser(bname:string,headless?:boolean){

    if(headless)
    {
        console.log("Execute test on Headless browser: "+bname);
        
    }else{
        console.log("Execute test with UI: "+bname);
        
    }
}

launchBrowser("chrome");
launchBrowser("edge",true);

//multiple optional parameters

function search(pname:string,price?:number,seller?:string){

    if(price && seller)
    {
        console.log("Search for Product: "+pname+" with price:"+price+" with Seller:"+seller);
        
    }else{
        console.log("Search for Product: "+pname);
        
    }
}

//call
search("iphone");
search("laptop",80000);
search("Bag",10000,"Zara");







/*
Ladder If statment help to validate multiple conditions

*/

//greater number out of 3 numbers

let num1=100,num2=200,num3=300;

if(num1>num2 && num1>num3)
{
    console.log(num1+" is greater than "+num2+" & "+num3);
    
}else if(num2>num1 && num2>num3)
{
        console.log(num2+" is greater than "+num1+" & "+num3);

}else
{
      console.log(num3+" is greater than "+num1+" & "+num2);

}

console.log("-------------------------");

//validate browsers for testing

let bname="Edge".toLowerCase();

if(bname === "chrome")
{
    console.log("Test case is executing on Chrome!");
    
}else if(bname === "edge")
{
        console.log("Test case is executing on Edge!");

}else if(bname === "firefox")
{
        console.log("Test case is executing on Firefox!");

}else if(bname === "safari")
{
        console.log("Test case is executing on Safari!");

}else{
    console.log("Wrong browser!");

    
}































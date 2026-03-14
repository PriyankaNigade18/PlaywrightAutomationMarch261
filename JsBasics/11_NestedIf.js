/*
Nested If statment help to validate multiple conditions
*/

let marks=95;

if(marks>=40)
{
    console.log("Pass!");
    if(marks>=90)
    {
        console.log("A");
        
    }else if(marks>=70)
    {
        console.log("B");
        
    }else if(marks>=50)
    {
        console.log("C");
        
    }else{
        console.log("D");
        
    }
    
}else{
    console.log("Fail!");
    
}

console.log("----------------------");

/*

score=80
if score is greater than or equal to 90--->A
if score is greater than or equal to 95--->A++
otherwise score is B 
*/

let score=95;

if(score>=90)
{
    if(score>=95)
    {
        console.log("A++");
        
    }else{
        console.log("A");
        
    }
}else{
    console.log("B");
    
}
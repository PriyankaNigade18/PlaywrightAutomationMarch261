/*
    Function Overloding: same name function we can call with
    multiple signature
    
    -type of parameter
    -change the order of parameter

    In ts we can use function overloading using prototype


*/


//prototype signature

function calculation(num1:number,num2:number):number;
function calculation(num1:string,num2:number):string
function calculation(num1:boolean,num2:string):string

function calculation(num1:any,num2:any):any
{
  
        return num1+num2;
    
    
}

console.log(calculation(100,100));
console.log(calculation("hello",100));
console.log(calculation(true,"hi"));



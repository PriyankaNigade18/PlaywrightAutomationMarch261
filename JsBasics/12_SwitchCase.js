/*
Switch case statement help to validate multiple conditions
It is based on Key : value matched

break statment will take control outside
of switchcase and loop body

*/

//Operations logic
let num1=100,num2=10;
let operator="/";

switch (operator) 
{
    case "+":
        console.log("Its Addition: "+(num1+num2));
            break;

    case "-":
        console.log("Its Subtraction: "+(num1-num2));
            break;

    case "*":
        console.log("Its Multiplication: "+(num1*num2));
            break;

    case "/":
        console.log("Its Division: "+(num1/num2));
            break;
    default:
        console.log("Wrong Operator!");
                
}

console.log("---------------");

let env="QA".toLowerCase();

switch (env) {
    case "dev":
        console.log("Test case is executing on Development Environment");
         break;
    case "qa":
        console.log("Test case is executing on Testing Environment");
         break;
    case "stage":
        console.log("Test case is executing on stage Environment");
        break;
    case "prod":
        console.log("Test case is executing on production Environment");
        break;

    default:
        console.log("Test case is executing in Default Environment!");
        
        break;
}










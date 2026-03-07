/*
Only declarations are hoisted, not initializations
Hoisting is the behavior where you can able to access variable before even declaring it.

Hoisting is applicable for var and function declaration: 
before declaraing var and function declaration we can access it

Var:Var type variable hoisted to global and functional scope 
and it automatically initialized to undefined


let/const:
===========
let and const variable are hoisted but they are not initilizd 
and they exist in Temporary dead zone(TDZ)
When variable is in TDZ it is not accessible before declaration.

(let and const , function expression we can not access before declaration)
*/

test1();

//test2();//error:ReferenceError: Cannot access 'test2' before initialization

//test3();//ReferenceError: Cannot access 'test3' before initialization

console.log(language);//undefined
var language="Javascript";
console.log(language);


//console.log(book);//TDZ:ReferenceError: Cannot access 'book' before initialization
let book="Java";
console.log(book);

//console.log(orgname);//ReferenceError: Cannot access 'orgname' before initialization
const orgname="Beizz";


//Function declaration:is hoisted: before declaration we can access it
function test1()
{
    console.log("This is function declaration....");
    
}

//function expression are also hoisted but you can not access it before declaration

let test2=function()
{
    console.log("This is Anonymous function.....");
    
}

let test3=()=>{console.log("This is arrow function......");}

test2();

test3();




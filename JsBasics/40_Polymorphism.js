/*
What is Polymorphism?
------------------------
One thing we can reuse in multiple form 

What is purpose?
---------------------
Method Reusability

Real time Example
------------------------
1.Payment Gateway
2.Login scenario
3.ola/uber

Types
--------------
1.Compile time polymorphism(Method Overloading)
2.Run time polymorphism(Method overriding)

Method Overloading
----------------------
Method can be reuse in same class with same name and differnt signature

Different signature
-----------------------
1.number of parameters
2.different type of parameter
3.change the order of parameter


Method Overriding(for upgrading)
-------------------------
-To achieve method overriding first classes must be in a relation(Is-A)
-Is-A relation we can implement using Inheritance
-Method can be overrided when same name method with same signature is declared
in parent and child class then Child class override parent class method

Note:
-----------------
Javascript is interpreted programming language as Javscript doent have
seperate compilation phase and even decisions are taken care at run time 
so we dont have any compile time decision and that is a reson Js does not 
support Method Overloading


Method Overloding/CompileTime polymorphism is not supported in Js
*/

/*
function login()
{
    console.log("default login is calling");
    
}

function login(un,psw)//SyntaxError: Identifier 'login' has already been declared
{
    console.log("new login is calling: "+un+" & "+psw);
    
}


login();
login('admin','admin123');
*/

class CalCulator{

add()
{
    console.log("default Addition is calling..... ");
    
}

add(a,b)
{
console.log("Addition is: "+(a+b));

}


login()
{
    console.log("Default login");
    
}

login(un,psw)
{
    console.log("login with un,psw: "+un+" : "+psw);
    
}

login(un,psw,otp)
{
    console.log("login with un,psw,otp: "+un+" : "+psw+": "+otp);
    
}
}

//Object
let c1=new CalCulator();
//c1.add();
c1.login("admin","admin123");


/*
Scenario: design login function which should run for 
differnt parameter
defaul login
login with un and psw
login with un,psw and otp

In JavaScript arguments is local variable 
the term argument refers to the actual values passed into a function when it is invoked
*/


function login()
{
if(arguments.length===0)
{
    console.log("Its default login");
    
}else if(arguments.length===2)
{
    console.log("User name is: "+arguments[0]);
    console.log("password is: "+arguments[1]);

}else if(arguments.length===3)
{
      console.log("User name is: "+arguments[0]);
    console.log("password is: "+arguments[1]);
    console.log("OTP is: "+arguments[2]);
    
}
}

login();
login("admin","admin123");
login("admin","admin123",5643);

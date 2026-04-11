/*
Method Overriding(for upgrading)
-------------------------
-To achieve method overriding first classes must be in a relation(Is-A)
-Is-A relation we can implement using Inheritance
-Method can be overrided when same name method with same signature is declared
in parent and child class then Child class override parent class method

*/


class Parent
{
    color()
    {
        console.log("Red");
        
    }
}

class Child extends Parent //child class always override parent method
{
    color()
    {
        console.log("Yellow");
        
    }
}

//test

const c1=new Parent();
c1.color();//Red

const c2=new Child();
c2.color();//Yellow


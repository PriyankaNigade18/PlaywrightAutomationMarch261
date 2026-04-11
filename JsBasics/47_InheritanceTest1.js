/*

Inheritance:
-------------------
One class properties we can share with other class using inheritance
Inheritance is an "IS-A" relation

What is purpose?
-------------------
1.To avoid code duplication
2.To reuse methods
3.To achieve Run time polymorphism (Method Overriding)

Real time example
-------------------
Parent and child relation

How to implement?
------------------
We use extends keyword to allow relations between classes

Types
--------------
1.Single level
2.Multi level
3.Heirarchical

we can not achieve these two types using Js
---------------------------------------
4.Multiple 
5.Hybrid

Note
------------------
Every parent class can access parent properties
Every child class can access Parent + Child properties

Method Overriding(for upgrading)
-------------------------
-To achieve method overriding first classes must be in a relation(Is-A)
-Is-A relation we can implement using Inheritance
-Method can be overrided when same name method with same signature is declared
in parent and child class then Child class override parent class method



*/

import { Vehical } from "./51_InheritanceTestVehical.js";


//Multilevel inheritance
export class Car extends Vehical
{
    price()
    {
        console.log("Car...Basic Model price is 1L");
        
    }
    
    refule()
    {
        console.log("Car.....refule()");
        
    }

    start()
    {
        console.log("Car.....start()");
        
    }

    stop()
    {
        console.log("Car....stop()");
        
    }
}










import { Car } from "./47_InheritanceTest1.js";



//Heirarchical Inheritance
export class Audi extends Car
 {

autoGear()
{
    console.log("Audi......autoGear()");
    
}

  price()
    {
        console.log("Audi...Basic Model price is 50L");
        
    }

}
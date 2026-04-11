
import {Car} from "./47_InheritanceTest1.js"

//single level inheritance
export class BMW extends Car
{
    autoEngine()
    {
        console.log("BMW.......autoEngine()");
        
    }
    price()
    {
        console.log("BMW...Basic Model price is 60L");
        
    }
}
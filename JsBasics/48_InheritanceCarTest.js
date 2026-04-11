//Here we are testing relations from classes


import {Car} from "./47_InheritanceTest1.js"
import {BMW} from "./49_InheritanceTestBMW.js"
import {Audi} from "./50_InheritanceTestAudi.js"

console.log("----Parent class Object------");

const p1=new Car();
p1.start();//individual method
p1.refule();//individual method
p1.stop();//individual method
//p1.autoEngine();//TypeError: p1.autoEngine is not a function
p1.breakFeature();
p1.price();


console.log("----Child class Object------");

const c1=new BMW();
c1.start();//inherited method
c1.refule();//inherited method
c1.autoEngine();//individual method
c1.stop();//inherited method
c1.breakFeature();
c1.price();

console.log("----------------------");

const c2=new Audi();
c2.start();//inherited method
c2.refule();//inherited method
c2.autoGear();//individual method
c2.stop();//inherited method
c2.breakFeature();


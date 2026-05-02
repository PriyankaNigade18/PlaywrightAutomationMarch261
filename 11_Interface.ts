/*
Data Abstraction:
---------------------------
Data Abstraction means hide internal structure of software
and provide relevant information/feature to the user

Purpose:
===============
Information hiding

Example
================
-ATM
-Coffee mc

How to implement?
========================
1. Using Abstract class
2. Using Interface 

Abstract class: 
--------------------
-Abstract class is a which can have implemented + nonImplemented(abstract method)
-Abstract class we declare with abstract keyword
-Abstract method  means method declartion without any body and method delcare with abstract keyword
-Using abstract class we can achieve partial abstraction
-Abstarct class object we cant create
-Abstract class methods we can call amd implement using child class

Interface
============
-Special class which can have only non implemented method(abstract method)
-methods are by default public and abstract
-Interface methods implement by its child class 
-Interface allows 100%abtraction
-we can not create Object for interface

In Ts interface we use for Prototype of object and Class level interface is also possible

Multiple inheritance we can achieve in ts using interface

*/


//Interface for Object act as prototype

interface User{
name:string,
age:number,
salary?:number,//optional property
city:string

//methods
coding():void;
testing():void;
}

let u1:User={
name:"Sarang",
age:33,
city:"Pune",

 coding():void{
console.log("This is coding()...calll");

},

testing():void{
    console.log("This is testing()...call");
    
}

}

console.log(u1);
console.log(u1.name);
u1.coding();
u1.testing();


console.log("------------------------");
//class level interface

interface WHO{
    covid19Test():void;
}

interface IndianMA extends WHO{
    physio():void;
    cardio():void;
}

interface UsMA extends WHO{
    dental():void;
    neuro():void;
}

//multiple inheritance
class NobleHs implements IndianMA,UsMA
{
covid19Test(): void {
     console.log("NobleHs....covid19TestService()");
}

dental(): void {
     console.log("NobleHs....dentalService()");
}
neuro(): void {
     console.log("NobleHs.....NeuroService()");
}
physio(): void {
    console.log("NobleHs.....physioservice()");
    
}
cardio(): void {
     console.log("NobleHs.....Cardioservice()");
}

medical():void{
    console.log("NobleHs......MedicalService()");
    
}



}

//Object
//parent class ref and parent class object: Invalid

//child class ref and child class object:valid
let n1:NobleHs=new NobleHs();
n1.medical();//individual
n1.physio();//abstract inherited method
n1.cardio();//abstract inherited method
n1.neuro();//abstract inherited method
n1.dental();//abstract inherited method
n1.covid19Test();


console.log("-------------");

//parent class ref and child class object:valid(parent)

let i1:IndianMA=new NobleHs();
i1.cardio();
i1.physio();
i1.covid19Test();

console.log("-------------");

let us1:UsMA=new NobleHs();
us1.dental();
us1.neuro();
us1.covid19Test();

//Hybrid + Multiple Inheritance in Typescript





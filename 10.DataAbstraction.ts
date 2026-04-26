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
*/

abstract class Page{

abstract getTitle():void;
abstract getUrl():void;

pageLoad():void{
    console.log("Page loading in 5sec");
    
}

}

//Object:Cannot create an instance of an abstract class.
//let p1:Page=new Page();

class LoginPage extends Page
{
    override getTitle(): void {
        console.log("Child Implemented...getTitle()");
        
        
    }
    override getUrl(): void {
        console.log("Child Implemented...getUrl()");
    }

    doLogin(un:string,psw:string):void
    {
        console.log("Hello "+un);
        
    }
    
}


//parent class ref and parent class object: Invalid scenario

//child class ref and child class object:valid
let lp:LoginPage=new LoginPage();
lp.getTitle();
lp.getUrl();
lp.pageLoad();
lp.doLogin("Sameer","test123");

console.log("--------------");
//Parent class ref and child class object:parent class

let p2:Page=new LoginPage();
p2.getTitle();
p2.getUrl();
p2.pageLoad();
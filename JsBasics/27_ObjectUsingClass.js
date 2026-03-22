/*
Object in Js is collection of Key and value pair
By default in Js keys are string type and value is real data (number/string/boolean)

Objects  we declare in {} in Js

Ways to declare Object
-----------------------
1. Object Literals
2. Using Class(after ES6 Classes added in Js)

What is Class:
---------------------
Class is Template or blueprint where we can describe 
properties of object

Class is collection of object

Constructor
----------------
It is special method used to initialize object
In Js only one constructor is allowed

this keyword:
-----------------
this keyword used to refer current class object(properties and methods)


For Class we can create object using new keyword


-----function------
3.Using constructor function(older)
4.Prototype Object(older)

What is Garbage collector?
-------------------------------
It is automechanism called by Js internally
So GC always monitor heap area where object will create and store
GC will destroy if it found any null reference object and no reference object
and free the heap memory

Which objects are eligibal for Garbage collector?
--------------------------------
1.No reference Object
2. Null reference object

*/

console.log("-------------Object Using Class----------------");

class StudentData
{
    //by default this data is public/Global
     id;
     name;
     address;
     subject;
     marks;

     constructor(id,name,address,subject,marks)//local variable
     {
        this.id=id;
        this.name=name;
        this.address=address;
        this.subject=subject;
        this.marks=marks;

     }

     /*SyntaxError: A class may only have one constructor
     constructor(id,name)
     {
        this.id=id;
        this.name=name;
     }*/

}

//Create Object
let s1=new StudentData(101,"Jay","Pune","Testing",89.77);
console.log(s1.id);
console.log(s1.name);
console.log(s1.address);
console.log(s1.subject);
console.log(s1.marks);

console.log("---------------");



let s2=new StudentData(201,"Neha","Mumbai");
console.log(s2.id);//201
console.log(s2.name);//Neha
console.log(s2.address);//Mumbai
console.log(s2.subject);//undefined
console.log(s2.marks);//undefined

console.log("---------------");

let s3=new StudentData(301,"Kriti");
console.log(s3.id);
console.log(s3.name);

console.log("--------No reference object---------");
/*
If object in not assign to any variable is called No reference object
And such object are eligible for Grabage collector

*/
new StudentData(401,"Raj","Delhi","Maths",78.66);

//null reference object
let s4=new StudentData(501);
s4=null;

//console.log(s4.id);//TypeError: Cannot read properties of null 

/*
What is Garbage collector?
-------------------------------
It is automechanism called by Js internally
So GC always monitor heap area where object will create and store
GC will destroy if it found any null reference object and no reference object
and free the heap memory

Which objects are eligibal for Garbage collector?
--------------------------------
1.No reference Object
2. Null reference object
*/




















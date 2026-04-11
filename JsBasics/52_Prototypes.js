
/*
Prototype is Object
We can add new property and access methods/properties using proptotypes

*/


//Object literal
const Parent={
    name:"Jay",

    show()
    {
        console.log("Show() is calling");
        
    }

}

//to create new Object which inherits same properties of parent we can add prototype
//--proto--

const Child={
    __proto__:Parent
}

console.log(Child.__proto__.name);

Child.__proto__.show();

console.log("----------------------------");

class Employee{

    id;
    name;
    constructor(id,name)
    {
        this.id=id;
        this.name=name;
    }


}

//create proptotype for this Employee Class

Employee.prototype.language="Js"

let e1=new Employee(101,"Savita");
//e1.language="Js";
console.log("Employee id is: "+e1.id+" Employee name is: "+e1.name+"Test Language: "+e1.language);

let e2=new Employee(102,"Sagar");
console.log("Employee id is: "+e2.id+" Employee name is: "+e2.name+"Test Language: "+e2.language);

console.log("------------------");

let fname="    Amit      ";
console.log("Total length: "+fname.length);//14
console.log("Total length: "+fname.trim().length);

//we can add property/method
String.prototype.trueLength=function(){
    return this.trim().length;
}

console.log(fname.trueLength());//4













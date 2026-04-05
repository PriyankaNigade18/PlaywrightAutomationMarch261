/*
Encapsulation
----------------
Wrapping of data and function together in single unit is called encapsulation

What is purpose?
------------------
For data security/daya hinding

Real time example
--------------------
capsule
class
object


How to achieve encapsulation in Js
-------------------------------------
We can create private data and to access that data we can create public getters and setters method

How to declare private data
-----------------------------
#variablename

getters(): get the data
setters(): set the data

Page object model for framework

*/

class Employee
{
    eid;
    ename;
    //private 
    #salary
    pfnum;

    constructor(id,name)
    {
        this.eid=id;
        this.ename=name;

    }

    show()
    {
        console.log("Employee id is: "+this.eid);
        console.log("Employee name is: "+this.ename);
        
        
    }

    //setter()
    setSalary(salary)
    {
        this.#salary=salary;
    }

    //getter()
    getSalary()
    {
        return this.#salary;
    }


}

//object
// const e1=new Employee(101,"Raj");
// e1.show();

//setsalary
//e1.setSalary(60000);

//getSalary
//console.log(e1.getSalary());


export {Employee}
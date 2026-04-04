/*
Module in Js is any javascript file
To share file content use export keyword
To access file content use immport keyword
*/


export const pi=3.14;
export let sname="Sarang";

// console.log("pi value is: "+pi);
// console.log("Student name is: "+sname );


/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
export function add(a,b)
{
console.log("Addition is: "+(a+b));

}

//add(100,2000);

export class Emp
{
    ename;
    eid;

    constructor(id,name)
    {
        this.eid=id;
        this.ename=name;
    }

    //method
     getData()
    {
        console.log("Employee id is: "+this.eid);
        console.log("Employee name is: "+this.ename);
        
    }


}

//Object
// const e1=new Emp(101,"Pooja");
// e1.getData();

//way 2: To export file contents

//export {pi,sname,add,Emp}
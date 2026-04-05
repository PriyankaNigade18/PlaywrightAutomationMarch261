/*
Static Keyword
----------------------
- we can assign static keyword for variable and method
- any data which is static we can call without any object
- static data we can call directly by class name
- Static data will accoupied memory from Common memory area(CMA)
- Static data will create memory one time and which shared with every object
- for any class if some common properties we wanted to define for 
all objects then that common data/property we can write as static


Constructor:
--------------
-Help to initialize object
-At the time of object creation constructor get call


*/

class EmpData
{
    //class level variable
    eid;
    ename;
    static orgName="HSBC";//static variable

    constructor(id,name)//local variable
    {
        this.eid=id;
        this.ename=name;

    }

    //method
     display()
    {
        console.log("Employee id is: "+this.eid);
        console.log("Employee name is: "+this.ename);
        console.log("Orangnization name is: "+EmpData.orgName);
        
               
    }
    //static method
    static show()
    {
        console.log("Static method is calling....");
        
    }


}

//object

const e1=new EmpData(101,"Kiran");
e1.display();
//call static method
EmpData.show();


const e2=new EmpData(102,"Narayan");
e2.display();
//call static method
EmpData.show();




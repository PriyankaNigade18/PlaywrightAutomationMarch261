/*
Super keyword is used to access immediate parent class
properties

*/

class Parent
{
    pid=101;
    constructor()
    {
        console.log("Parent constructor....");
        
    }

    parentIncome()
    {
        console.log("Parent Income is $17000");
        
    }

    getPid()
    {
        return this.pid;
    }

}


class Child extends Parent
{
    cid=222;

     constructor()
    {
        super();
        console.log("Child constructor....");
        
    }

    childIncome()
    {
        //console.log("Parent id: "+super.pid);//undefined

        console.log(super.getPid());
        super.parentIncome();
        
        console.log("Child id: "+this.cid);
        
        console.log("Child income is: $40000");
        
    }

}

//test
const c1=new Child();
c1.childIncome();

// c1.parentIncome();
// console.log(c1.pid);
// console.log(c1.cid);

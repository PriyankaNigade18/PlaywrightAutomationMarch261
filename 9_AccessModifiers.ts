/*
Access modifier define some access permissions
In Typescript 3 modifiers allowed
1.public
2.private 
3.protected

modifier   sameClass    subClass     outsideofClass
public       yes          yes           yes
private      yes          No             No
protected    yes          yes           No


How to access private data/method?
----------------------------------------
For private method you can use Encapsulation
Create public method which will call private Method


*/





class Tester
{
    public testing():void{
        console.log("This is public method....testing()");
        
    }

    private coding():void{
        console.log("This is private method....coding()");
        
    }

    protected monitor():void{
        console.log("This is protected method....monitor()");
        
    }

    //to call private Method
    public doCoding():void
    {
        this.coding();
    }
}



class Emp extends Tester{

    //protected 
    test():void{
    let e1:Emp=new Emp();//subclass
    e1.testing();
    e1.monitor();//protected
    }
}

//Object
let t1:Tester=new Tester();
t1.testing();//public 
t1.doCoding();

console.log("-------------");

let e1:Emp=new Emp();
e1.testing();//public
e1.test();
e1.doCoding();
console.log("-------------");

let t2:Tester=new Emp();
t2.testing();//public
t2.doCoding();


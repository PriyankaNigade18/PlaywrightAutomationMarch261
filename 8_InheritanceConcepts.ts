

class Car{
    start():void{
        console.log("Car....start()");
        
    }

    refule():void{
        console.log("Car....refule()");
        
    }


    stop():void{
        console.log("Car....stop()");
        
    }

    price():void{
        console.log("Car....1L");
        
    }
}

class BMW extends Car{

   override price():void{
        console.log("BMW....50L");
        
    }
autoParking()
{
    console.log("BMW ......autoParking");
    
}
}
//Js object
//let c1=new Car();

//ts object: parent class ref and parent class object:Parent
let c1:Car=new Car();
c1.start();
c1.refule();
c1.stop();
c1.price();

console.log("------------------");

//child class ref and child class object:parent+child
let b1:BMW=new BMW();
b1.start();//inherited
b1.refule();//inherited
b1.stop();//inherited
b1.autoParking();//individual
b1.price();

console.log("------------------");

//parent ref and child object(top casting):Parent class

let c2:Car=new BMW();
c2.start();
c2.refule();
c2.stop();
c2.price();



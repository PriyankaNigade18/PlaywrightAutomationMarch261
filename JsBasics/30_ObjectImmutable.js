
/*

When Any Object is an immutable means we cannot modify that object

Object we can make as Immutable using freeze() 
We can call this method using Object interface

seal()
----------
Only existing properties of object we can modify with seal method
no addition or no deletion


*/


let product={
    name:'iphone',
    price:80000
}

console.log(product);

//immutable freeze(Objectname)
/*
Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
*/
Object.freeze(product);

//add new property
//product.version=15;//TypeError: Cannot add property version, object is not extensible

//delete any existing property
//delete product.price;//TypeError: Cannot delete property 'price' of #<Object>


//modify existing property
//product.name="laptop";//TypeError: Cannot assign to read only property 'name' of object '#<Object>'
console.log(product);

console.log("---------------------");

let browser={
    name:"chrome",
    version:140
}

console.log(browser);

//Prevents the modification of attributes of existing properties, and prevents the addition of new properties.
Object.seal(browser);

//add new property for an object
//browser.certification=false;//TypeError: Cannot add property certification, object is not extensible

//delete any existing property
//delete browser.name;//TypeError: Cannot delete property 'name' of #<Object>

//modify existing property
browser.name="Edge";
console.log(browser);


/*
//add new property
product.version=14;

console.log(product);//{ name: 'iphone', price: 80000, version: 14 }

//delete existing property
delete product.price;

console.log(product);{ name: 'iphone', version: 14 }
*/
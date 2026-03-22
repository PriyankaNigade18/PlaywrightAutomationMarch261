/*
Object in Js is collection of Key and value pair
By default in Js keys are string type and value is real data (number/string/boolean)

Objects  we declare in {} in Js

Ways to declare Object
-----------------------
1. Object Literals
2. Using Class(after ES6 Classes added in Js)

-----function------
3.Using constructor function(older)
4.Prototype Object(older)

*/

console.log("-------Object Literals-------");

let person={};
console.log(person);//{}
console.log(typeof person);//Object

let user={
    fname:'Sarang',
    age:29,
    isActive:true,
    isEmployeed:false
}

console.log(user);

//How to read properties from object:
// 1.Objectname.key

console.log(user.fname);
console.log(user.age);
console.log(user.isActive);

//2 using objectname['key']

console.log(user['fname']);
console.log(user['age']);
console.log(user['isEmployeed']);

//Add new property to the object
user.city="Pune";
console.log(user);

//Modify any existing property of object
user.age=35;
console.log(user);


//delete any property from object
 delete user.isEmployeed;
 console.log(user);
 
console.log("--------Iteration of Object----------------");
//for...in loop: Iterates over keys /index

for(let key in user)
{
    console.log(key);
    
}

console.log("----------");

for(let key in user)
{
    console.log(user[key]);
    
}

console.log("----------");

for(let key in user)
{
    console.log("at key: "+key+' value is: '+user[key]);
    
}






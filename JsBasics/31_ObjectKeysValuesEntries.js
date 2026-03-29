

/*
keys() values() entries() from Object interface
*/

let user={
    name:'Sarang',
    age:30,
    city:'Mumbai',
    isActive:true
}

console.log(user);

//to get only keys from object: Object.keys(nameofobject):String[]

let allKeys=Object.keys(user);
console.log(allKeys);


//get the values using Object.values(nameofobject)
let allValues=Object.values(user);
console.log(allValues);


//to get key:value pair: Object.entries(nameofobject)
let data=Object.entries(user);
console.log(data);



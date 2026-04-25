
//Array: It is dynamic Object

let marks:number[]=[80,56,78,45];
console.log(typeof marks);//Object

console.log("Total elements: "+marks.length);
console.log(marks[2]);//78

marks.push(65);
console.log(marks);

//marks.push('Sameer'); not allowed CLError

let location:string[]=['Pune','Mumbai','Delhi'];
console.log(location);

//Declaration of array using Array interface

let device:Array<string>=['iphone','mac','keyboard','mouse'];
console.log(device);

let sid:Array<number>=[101,102,103,104];
console.log(sid);

let devices:Array<string|number>=['iphone','mac','keyboard','mouse',90000,'monitor'];
console.log(devices);

console.log("------------------------");

/*
touple: A touple is fixed length of array used to declare static array
As it is fixed length of array where each position has specific type
-Only in Ts touple is supportable 
*/

let userData:[string,number]=['Jay',456456];
console.log(userData.length);//2
console.log(typeof userData);//Object

let person:[string,string,number,boolean,number]=["Sarang","Pune",40,true,12.33];
console.log(person);








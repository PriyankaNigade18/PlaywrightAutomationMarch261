
//indexOf():Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
let month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","sep"];

let index1=month.indexOf('Apr');
console.log(index1);//3

let index2=month.indexOf("Oct");
console.log(index2);//-1

console.log("---------------");

let fname=['Amit','Jay','Nikita','Raj','Poonam','Raj','Smita','Neha','Raj'];
//index:    0      1     2         3      4       5     6       7     8
let fi=fname.indexOf('Raj');
console.log(fi);//first occurrance index: 3


//index of second occurrance of Raj
let f2=fname.indexOf("Raj",4);//look for Raj from strting index 3
console.log(f2);//5

console.log("---------------");
let sname=['Amit','Jay','Pooja','Nikita','Raj','Poonam','Raj','Smita','Neha','Raj'];
//index:    0      1     2         3      4       5     6       7     8       9

let fo=sname.indexOf("Raj");
console.log("First Occurrence: "+fo);//4

//second Raj index
let so=sname.indexOf("Raj",fo+1);//look for "Raj" strat index is: 4+1=5
console.log("Second occurrence: "+so);//6

//third
let to=sname.indexOf("Raj",so+1);//6
console.log("Third Occurrence: "+to);//9

//lastIndexOf():Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present. 
let li=sname.lastIndexOf("Raj");
console.log(li);




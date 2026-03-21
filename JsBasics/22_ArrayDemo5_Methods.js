/*//Methods
--------------
1.Push(): add element at the last
2.unshift(): add elements at the begining
3.pop(): remove element from last
4.shift(): remove element from begining
5.reverse(): to reverse array element
6.join():join the array element
7.(...spred operator): for copy array elements
8.concat():combine two or more array
9.slice():return portion of array as substring
*/

//slice: return portion of array as substring
//slice(startindex,lastindex): exclue lastindex: lastindex-1
let number=[10,20,30,40,50,60];
//    index:0   1  2  3  4  5

console.log(number);

//slice for 20,30,40
let slice1=number.slice(1,3)//here start index=1,endindex=3
console.log(slice1);[20,30]//lastindex-1

let slice2=number.slice(1,4);//upto 3rd index it will slice
console.log(slice2);//[ 20, 30, 40 ]

//get the last 3 numbers form array(negative index)
let slice3=number.slice(-3);
console.log(slice3);//[ 40, 50, 60 ]

//get the last number from array
let num=number.slice(-1);
console.log(num);//[ 60 ]

//get the strating from first element upto end element
let num2=number.slice(0);
console.log(num2);//[ 10, 20, 30, 40, 50, 60 ]

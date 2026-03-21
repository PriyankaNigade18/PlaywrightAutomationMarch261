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


/*
splice():
-Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
-remove elements from the array and replace with new elements 
Syntax:
--------------
splice(startindex,deleteCount,element to insert)

*/


let fruits=["Mango","Orange","Banana","Greps","Kiwi","Apple"]
//  index:   0        1         2      3        4       5
console.log(fruits);
/*
//remove 1 element from index 2
let deletedEle1=fruits.splice(2,1);//starts with index 2 and delete 1 fruit
console.log(deletedEle1);
console.log(fruits);


//remove 2 elements from index 1
let deletedEle2=fruits.splice(1,2);//starts with 1 and delete 2
console.log(deletedEle2);
console.log(fruits);
*/
//start with index 1,dont delete anything and insert two fruits
fruits.splice(1,0,"papaya","greenapple");
console.log(fruits);

let deletedFruit=fruits.splice(3,2,"redPair");
console.log(deletedFruit);
console.log(fruits);


//Mango,papaya,greenapple,redpair,grep,kiwi,apple
//-7     -6      -5        -4      -3   -2   -1

//starts with secondlast fruit and delete 2
let deletedFruits2=fruits.splice(-2,2)
console.log(deletedFruits2);//[ 'Kiwi', 'Apple' ]
console.log(fruits);//[ 'Mango', 'papaya', 'greenapple', 'redPair', 'Greps' ]











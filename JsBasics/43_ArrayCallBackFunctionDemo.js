
/*
forEach(), map(), filter(), reduce()
*/

let num=[10,20,30,40,50];
console.log(num);

//iterate array and print elements:forEach()
//square of array element
num.forEach((element)=>{
console.log(element*element);

})

console.log("---------");

let product=['mobile','tv','laptop','monitor','mouse'];

product.forEach((productName)=>{
console.log(productName.toUpperCase());

})

console.log("----------------------------");

//map(): Transform array elements

let links=['home','register','login','about us','help','privacy policy'];

links.map((footerLink)=>{
console.log('Facebook '+footerLink);

})

//stor the result as array
let updatedLinks=links.map(link=>'Amazon '+link);
console.log(updatedLinks);

console.log("----------------------------");

//filter: Filter the array element

let data=[1,2,3,4,5,6,7,8,9,10];

//filter the even numbers

let evenNumbers=data.filter(ele=>ele%2===0);
console.log(evenNumbers);

//filter for odd numbers
let oddNumbers=data.filter(ele=>ele%2!=0);
console.log(oddNumbers);
console.log("----------------------------");

//reduce: reduce array element like sum of array elements/avg of elements

//sum of array element
let num2=[10,20,30,40,50];
let total=0;
for(let i of num2)
{
total=total+i;
}
console.log("Sum of array elements: "+total);

//with method : reduce

let sum=num2.reduce((total,ele)=>total+ele,0);
console.log("Sum of array elements: "+sum);

//multiply all array element
let multiply=num2.reduce((total,num)=>total*num,1);
console.log(multiply);













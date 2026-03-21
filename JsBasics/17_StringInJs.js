/*
String
============
- string in Javascript is an Immutable Object and primitive Data type
- string is collection of characters

property
-------------
length

Methods
----------
To perform multiple operations on String we have methods

toUpperCase()
toLowerCase()
trim()
inludes()
concat()
charAt(index)
indexOf()
replace()
replaceAll()
split("regular expression")

*/

console.log("-----string Immutability-------");
//once you declare string no one can modify value of string
let fname="Jay";
console.log(fname);//"Jay"
//fname[1]='A';//TypeError: Cannot assign to read only property '1' of string 'Jay'
console.log(fname);

//property:length
let s1="Hello All";
console.log("Length of string is: "+s1.length);//9

//methods
//Conversion: toUpperCase / toLowserCase()
console.log("UpperCase conversion: "+s1.toUpperCase());
console.log("LowerCase Conversion: "+s1.toLowerCase());

//concat():Returns a string that contains the concatenation of two or more strings.
let s2="lets learn Javascript Strings";
console.log(s1+" "+s2);
console.log(s1.concat(" "+s2));

//trim(): To ignore white space before and after string

let s3="       Welcome All       ";
console.log(s3);
console.log(s3.trim());

//chatAt(index) : this method returns characters from that index
let s4="Playwright is WebUi automation tool";
console.log(s4.charAt(0));//P
console.log(s4.charAt(7));//g

//indexOf('char'): this method returns index of character
//Returns the position of the first occurrence of a substring.
console.log("Index for i: "+s4.indexOf('i'));

//find the position of second occurrence 
console.log(s4.indexOf('i',7));//11

//lastIndexOf():Returns the last occurrence of a substring in the string.
console.log(s4.lastIndexOf('i'))

//Search: Partial string : includes()

let s5="Playwright is WebUi automation tool and Api testing tool"

console.log("look for WebUi?: "+s5.includes("WebUi"));//true
console.log("look for Selenium?: "+s5.includes("Selenium"));//false

//startswith(prefix value) and endswith(suffix value)
console.log("String startswith Playwright?: "+s5.startsWith('Playwright'));//true

console.log("String startswith Play?: "+s5.startsWith('Play'));//true

console.log("String startswith P?: "+s5.startsWith('P'));//true

console.log("String startswith wright?: "+s5.startsWith('wright'));//false

console.log("String endswith tool?: "+s5.endsWith("tool"));//true

console.log("String endswith ol?: "+s5.endsWith("ol"));//true

console.log("String endswith too?: "+s5.endsWith("too"));//false

console.log("-------------------");

//replace() and replaceAll()
let s6="Playwright support WebUi automation testing and Api testing and end to end testing"
console.log(s6.replace("testing","*****"));

console.log(s6.replaceAll("testing","******"));

console.log("-------------------");

//split("regular expression")

let tools="Selenium,Playwright,Cypress,Appium,Postman";
console.log(tools);

let arr=tools.split(",");

console.log(arr);//[ 'Selenium', 'Playwright', 'Cypress', 'Appium', 'Postman' ]

console.log(arr[2]);//Cypress

console.log(arr[4]);//Postman

console.log(arr[1]);//Playwright

//seperate month from year
let date="March 2026";
let month=date.split(" ")[0];
let year=date.split(" ")[1];

console.log("month: "+month);
console.log("year: "+year);


//How to reverse any string

let programming="Javascript";
console.log("Current string is: "+programming);
let result="";
let lastIndex=programming.length-1;
for(let i=lastIndex;i>=0;i--)
{
    result=result+programming.charAt(i);
}

console.log("Reverse of string is: "+result);



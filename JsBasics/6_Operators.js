/*
1.Arithemetic operators: +,-,*,/,%
2.Unary operators: ++,--
3.Relational operators: >,>=,<,<=
    ==Loose equality         === strict equality
4.Logical Operators:&&,||,!
*/
console.log("----Arithmetic operators-----");


let a=10,b=5;
console.log("Addition is: "+(a+b));
console.log("subtraction is: "+(a-b));
console.log("Multiplication is: "+(a*b));
console.log("Division is: "+(a/b));
console.log("Modulus is: "+(a%b));

console.log("-------Interview question-------");
console.log(90/0);//Infinity
console.log(-67/0);//-Infinity
console.log(0/0);//NaN(Not a number)
console.log("Hello"/3);//NaN
console.log(undefined/0);//NaN

//isNaN():will check whether value is not a number

console.log(isNaN(102));//false
console.log(isNaN("Jay"));//true

console.log("----Unary operators-----");
/*
++(Increment)
------------------
a++=a=a+1;
1.postIncrement      2.PreIncrement
a++                     ++a

--(Decrement)
-------------------
a--=a=a-1;
1.postDecrement       2.predecrement
a--                       --a
*/

//PreIncrement
let c=100;
console.log(c);//100
console.log(++c);//101

//postIncrement
let d=100;
console.log(d);//100
console.log(d++);//100
console.log(d);//101


let i=90;
let j=i++;//postIncrement:first value will assign then increment
console.log(i);//91
console.log(j);//90


let e=768;
let f=e++;
console.log(e);//769
console.log(f);//768


let g=89;
let h=++g;//preIncrement: value will increment first then assign
console.log(g);//90
console.log(h);//90

//decrement
let r=56;
console.log(r);//56
console.log(r--);//56
console.log(r);//55

let o=57;
console.log(o);//57
console.log(--o);//56


let l=78;
let m=l--;
console.log(l);//77
console.log(m);//78

let p=45;
let q=--p;
console.log(p);//44
console.log(q);//44

console.log("-------Relational operators----------");
/*
TestData
------------
p=q=44 l=77 m=78 g=h=90 i=91 j=90
*/
console.log("Less than: <: "+(p<l));//true
console.log("Less than and equal to: <=: "+(p<=q));//true
console.log("Greter than : > "+(i>h));//true
console.log("Greter than equal to: >="+(h>=j));//true
console.log(p>i);//false
console.log(i<=j);//false
console.log(m>j);//false

/*
==(loose equality)
-----------------
here value will type coersed first and then compare
Type coercion is implicit type casting in Js

===(strict equality)
-----------------------
Here values will be compared as it is no type coercion

*/

//loose equality
console.log("100"==100);//true
console.log(null==undefined);//true
console.log(0==0);//true



//strict equality(In Automation)
console.log("100"===100);//false
console.log(null===undefined);//false
console.log(0===0);//true

console.log("--------logical Operators------------------");

/*
c1      c2          &&(AND)         ||(OR)          !c1(NOT)
true    true        true            true            false
true    false       false           true            false
false   true        false           true            true
false   false       false           false           true

Test Data:
----------------
p=q=44 l=77 m=78 g=h=90 i=91 j=90


*/
console.log("------&&---------");

console.log((p===q) && (i>j));//true
console.log((i>l) && (h>=i));//false
console.log((m===l) && (h===j));//false
console.log((q>g) && (p>h));//false

console.log("------||---------");

console.log((p===q) || (i>j));//true
console.log((i>l) || (h>=i));//true
console.log((m===l) || (h===j));//true
console.log((q>g) || (p>h));//false

console.log("------!(NOT)---------");


console.log((p===q));//true


console.log(!(p===q));//false


console.log((p>q));//false
console.log(!(p>q));//true


























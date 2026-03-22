
let u1={
    id:101,
    fname:"Anu"
}

let u2={
    id:102,
    fname:"Deepak"
}


let u3={
    id:103,
    fname:"Kiran"
}


console.log(u1);//Anu
console.log(u2);//deepak
console.log(u3);//kiran

console.log("-----------------");

u1=u2;
console.log(u1);//deepak
console.log(u2);//deepak
console.log(u3);//kiran
console.log("-----------------");

u2=u3;
console.log(u1);//deepak
console.log(u2);//kiran
console.log(u3);//kiran
console.log("-----------------");

u3=u1;
console.log(u1);//deepak
console.log(u2);//kiran
console.log(u3);//deepak
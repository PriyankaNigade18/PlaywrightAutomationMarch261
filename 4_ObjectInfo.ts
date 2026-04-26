
/*
Object in Javascript
let user={
    name:"Priyanka",
    role:"SDET",
    isActive:true,
    city:"Pune",
    salary:12.33
};
console.log(typeof user);//object
console.log(user);
*/

//Object in typescript
let user:{name:string,role:string,isActive:boolean,city:string,salary:number}={
    name:"Priyanka",
    role:"SDET",
    isActive:true,
    city:"Pune",
    salary:12.33
};
console.log(typeof user);//object
console.log(user);


/*
type keyword: type alise
-To create custom type of Object(we can create prototype first then 
we can use for object as data type)

*/

//prototype
type data={name:string,role:string,isActive:boolean,city:string,salary:number};

let newUser:data={
    name:'Priyanka',
    role:"SDET",
    isActive:true,
    city:"Pune",
    salary:12.33
    
}

console.log(newUser);
console.log(typeof newUser);

//ex
let newUser2:data={
    name:'Sarang',
    role:"SDET",
    isActive:true,
    city:"Pune",
    salary:12.33
}


//ts: technique1
let person:{id:number,name:string}={
    id:101,
    name:"Kavita"
}
//ts: technique2:type keyword used to create custom object(pom)
type info={readonly id:number,name:string};

let newPerson:info={
     id:101,
    name:"Kavita"
}

//Cannot assign to 'id' because it is a read-only property.
//newPerson.id=201;
//in ts constant declaration is possible with readonly keyword(Only for objects)
const pi:number=3.14;
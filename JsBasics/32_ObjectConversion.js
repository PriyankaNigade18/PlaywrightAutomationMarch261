/*
For API Testing sometimes we need to convert Js object into Json
or Json object into js object


JSON Object in Javascript

To convert Javascript object into JSON : sringify(jsobject);
JSON.strigify()

To Convert json string into js object: parse(jsonstring)
JSON.parse()


*/

let user={
    name:"Poonam",
    isActive:true
}

console.log(user);
console.log(typeof user);//object

//Js Object--->JSON object(string)
//Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
let jsToJson=JSON.stringify(user);
console.log(jsToJson);
console.log(typeof jsToJson);//string

console.log("--------------");

let jsonData=`{
            "name": "Apple MacBook Pro 16",
            "data": {
                "year": 2019,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
            }`
console.log(jsonData);
console.log(typeof jsonData);//string

//JSON string into JavascriptObject: parse()
//Converts a JavaScript Object Notation (JSON) string into an object.
let jsontoJs=JSON.parse(jsonData);
console.log(jsontoJs);
console.log(typeof jsontoJs);//Object






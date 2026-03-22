

//includes():Determines whether an array includes a certain element, returning true or false as appropriate.
let product=['mobile','laptop','mouse','keyboard','display'];

console.log(product);

//search for iphone
let status1=product.includes('iphone');
console.log("Iphone is available in Array?: "+status1);//false


let status2=product.includes("mouse");
console.log("mouse is available in Array?: "+status2);//true

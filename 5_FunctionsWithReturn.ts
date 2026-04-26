

//javascript function
function test1()
{
    console.log("This is test1() is calling....");
    
}

test1();

//typescript function 
function test2():void
{
    console.log("This is test2() is calling....");
    
}

test2();

//function with return
function test3(msg:string):string
{
    return msg;
}

let res=test3("Hello All");
console.log(res);

function add(a:number,b:number):number
{
        return a+b;
}

console.log("Addition is: "+add(100,200));

console.log("----------------");

function getTrainerName():Promise<string>
{
    return Promise.resolve("Priyanka");
}

//way1:
getTrainerName().then((res)=>{
console.log("Trainer Name is: "+res);

})

//way2: Handle promise using async function+await
async function getData()
{
    let name=await getTrainerName();
    console.log("Instructor name is: "+name);
    
}

getData();


console.log("-------------------------------");

function getZipCode():Promise<number>
{
    return Promise.resolve(411047);
}

//way1:
getZipCode().then((res)=>{
console.log("Status is: "+res);
})

//way2
async function getAreaData()
{
let areaCode=await getZipCode();
console.log(areaCode);

}

//call
getAreaData();


//Playwright scenario

//playwright code
function click(element:string):Promise<void>
{
    console.log("Click on : "+element);
    return Promise.resolve();
    
}

//utility
async function doClick(element:string)
{
    await click(element);
}

//in test case
doClick('forgot password link');










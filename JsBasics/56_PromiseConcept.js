/*
Promise is used to handle/manage asynchronus nature of application
Promis is an Object in Js

For Example:
ApiCall,Ajax operation,,file reading,dowload 

Use Case
====================
your placing order: promise is created
prepare food: Pending state
food is delivered : fullfill(Resolve)
Cancel order: rejected(reject)

Notes:
===========
 A Promise is an object used to managing asynchronous operataion
- promise allow you to write code that continue after a specific event occur
- Promises enabled the handling of data that is not currently available
but will be available in the future
- A promise has 3 states pending, resolve and reject

pending: This is initial state when the promise is neither fullfilled or rejetcted

fullfilled: This state means asynchronous operation associated with
promise has been successfully completed

Rejected: This state indicates that the asynchronus operation has failed
or been rejected

setteled
============
-when promise is either fullfilled or rejected it enter the settled state

-In this state there are two important methods
1.then():
------------
when promise successfully transitions to the fullfilled state, then method
allows you to specify a callback function that will work with completed data
-this is used to define what should happen when a successfull result is obtained

catch():
-----------
when promise transitions to the "rejected" state the catch method let you specify
a callback function that will work with rejected error
-This is used to handle situation where the operation fails
*/

let myPromise=new Promise((resolve,reject)=>{

    let status=false;
    if(status)
    {
        resolve("Test pass!")
    }
    else{
        reject("Test Fail")
    }

     })

     //call
     myPromise.then((result)=>{
        console.log(result);
        
     }).catch((error)=>{
        console.log(error);
        
     })

     console.log("-----resolve promise----");

     let resolvePromise=new Promise((resolve,reject)=>{
                            resolve("Promise is completed...")
                            });
     
                    resolvePromise.then((res)=>{
                            console.log(res);
                            
                    })

    console.log("-----error promise----");
     
    let errorPromise=new Promise((resolve,reject)=>{
                 reject("Something is wrong with application...")
                });

                errorPromise.catch((error)=>{
                        console.log(error);
                        
                })


//one more way to declare promise
let p1=Promise.resolve("Task1 is done!");

//call
p1.then((msg)=>{
console.log(msg);

})

//reject
let p2=Promise.reject("Task1 is rejected");

//call
// p2.then((res)=>{
// console.log(res);

// })//UnhandledPromiseRejection:

p2.catch((error)=>{
console.log(error);

})


console.log("----Promise with async operation-----");
let resPromise=new Promise((resolve,reject)=>{

    setTimeout(() => {
        resolve("Task completed in 3sec")
    },3000);
})

//call
resPromise.then((status)=>{
console.log(status);

})

//reject
let errorPromise=new Promise((resolve,reject)=>{
    setTimeout(() => {
    reject("Task Rejected after 2sec");
        },2000);
    })

    //call
    errorPromise.catch((error)=>{
        console.log(error);
        
    })


    //real async operation then() catch() finally()
    //finally will execute for promise settled (fullfill/reject)

    function fetchUser()
    {
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                let user={
                    name:"Nakul",
                    role:"SDET"
                }
                resolve(user)
            },3000);
        })
    }

    fetchUser().then((status)=>{
        console.log(status);
        
    })

    //with resolve and reject both the status
    //real async operation then() catch() finally()
    //finally will execute for promise settled (fullfill/reject)
    function getUserData()
    {
        return new Promise((resolve,reject)=>{

            let flag=true;
            if(flag)
            {
                 setTimeout(() => {
                    let user={
                        name:"Pinky",
                        role:"QA"
                    }
                        resolve(user)
                    },2000);

            }else
            {
                setTimeout(() => {
                    reject("User not found!");
                },2000);

            }
        })
    }

    //call
    getUserData().then((result)=>{
        console.log(result);

    }).catch((error)=>{
        console.log(error);
        
    }).finally(()=>{
        console.log("Seraching for Automation Engineer!");
        
    })


    //Promise: all(),rece(),allSettled(),any()

//all(): Run multiple promise in parallel and wait for all promise fullfilled

let pr1=Promise.resolve("Task1 done");
let pr2=Promise.resolve("Task2 done");
let pr3=Promise.resolve("Task3 done");

Promise.all([pr1,pr2,pr3]).then((status)=>{
console.log(status);

})

//for resolve state
let pr11=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Display logo on the page in 3sec")
    },3000);
})

let pr12=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Load login page in 2sec")
    },2000);
})

let pr13=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Load footer link in 1sec")
    },1000);
})

Promise.all([pr11,pr12,pr13]).then((status)=>{
console.log(status);

})

/*
all() once found any reject status then it will execute catch() and 
no other promises will fullfill
*/

//for reject
let pr11=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Display logo on the page in 3sec")
    },3000);
})

let pr12=new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("Error on Load login page in 2sec")
    },2000);
})

let pr13=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Load footer link in 1sec")
    },1000);
})

Promise.all([pr11,pr12,pr13]).then((status)=>{
console.log(status);

}).catch((error)=>{
console.log(error);

})


//race():It return first promise that either fullfill or rejected

let pr11=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Display logo on the page in 3sec")
    },3000);
})

let pr12=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Load login page in 2sec")
    },2000);
})

let pr13=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Load footer link in 1sec")
    },1000);
})

let pr14=new Promise((resolve,reject)=>{
setTimeout(() => {
    reject("Promise Rejected in 500ms")
}, 500);
})

Promise.race([pr11,pr12,pr13,pr14]).then((status)=>{
console.log(status);

}).catch((status)=>{
console.log(status);

})

//allSettled():Wait for all the promise to finish whether it is fullfill or reject


let pr11=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Display logo on the page in 3sec")
    },3000);
})

let pr12=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Load login page in 2sec")
    },2000);
})

let pr13=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Load footer link in 1sec")
    },1000);
})

let pr14=new Promise((resolve,reject)=>{
setTimeout(() => {
    reject("Promise Rejected in 500ms")
}, 500);
})

Promise.allSettled([pr11,pr12,pr13,pr14]).then((status)=>{
console.log(status);

}).catch((status)=>{
console.log(status);

})
/*

[
  { status: 'fulfilled', value: 'Display logo on the page in 3sec' },
  { status: 'fulfilled', value: 'Load login page in 2sec' },
  { status: 'fulfilled', value: 'Load footer link in 1sec' },
  { status: 'rejected', reason: 'Promise Rejected in 500ms' }
]

*/

//any():return 1st successfull promise

let pr11=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Display logo on the page in 3sec")
    },3000);
})

let pr12=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Load login page in 2sec")
    },2000);
})

let pr13=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Load footer link in 1sec")
    },1000);
})

let pr14=new Promise((resolve,reject)=>{
setTimeout(() => {
    reject("Promise Rejected in 500ms")
}, 500);
})

Promise.any([pr11,pr12,pr13,pr14]).then((status)=>{
console.log(status);

}).catch((status)=>{
console.log(status);

})


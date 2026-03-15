/*
break:
-----------
break statement we use to take control out of switch and loop body
-break is applicable for switch and loop

continue:
--------------
continue statement skip the certain part of code and continue execution

*/

for(let i=1;i<=10;i++)
{
    if(i>=5)
    {
        break;
    }else
    {
        console.log(i);

    }
}

console.log("-----------------");

for(let i=1;i<=10;i++)
{
    if(i>5)
    {
        break;
    }else
    {
        console.log(i);

    }
}

console.log("-----------------");


for(let i=1;i<=10;i++)
{
    if(i===5)
    {
        continue;
    }else
    {
        console.log(i);
        
    }
}

console.log("--------------");

//valid Url: Protocol+Domain+path
//https://www.google.com/

let url="www.google.com"

for(let i=1;i===1;i++)
{
if(url.includes("https"))
{
    console.log("valid link");
    
}else
{
    console.log("Invalid link!");
    continue;
    
}
}









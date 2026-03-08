//Simple If statement applicable for single true condition


//validate current year
let year=2026;

if(year === 2026)
{
    console.log("Year match!...Current year is 2026!");
    
}

console.log("-----------------");

//validate url address with protocol/url should not be null

let baseUrl="https//www.google.com";

//url should have protocol
if(baseUrl.includes("https"))
{
    console.log("Url is as per standard!");
    
}

//url should not be null
if(baseUrl !== null)
{
console.log("Url is not null!");

}

//combine
if(baseUrl!==null && baseUrl.includes("https"))
{
    console.log("Valid Url!...Open Application in Browser");
    
}

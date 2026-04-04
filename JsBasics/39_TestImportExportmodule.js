
//import {add,Emp} from "./38_ImportExportModule.js"
//import {pi,sname,add,Emp} from "./38_ImportExportModule.js"
import * as data from "./38_ImportExportModule.js";

 console.log("pi value is: "+data.pi);//ReferenceError: pi is not defined
console.log("student name is: "+data.sname);

//function
data.add(200,300);


//class

const e1=new data.Emp(201,"Sameer");
e1.getData();

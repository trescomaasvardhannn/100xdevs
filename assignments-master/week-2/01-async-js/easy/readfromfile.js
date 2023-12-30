const { error } = require("console");
let fs=require("fs");

fs.readFile("f1.txt",'utf-8',function(err,data){
    console.log("reading 1st time");
    console.log(data);
})
fs.writeFile("f1.txt","by harshvardhan","utf-8",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("successfully written")
    }
})
fs.readFile("f1.txt",'utf-8',function(err,data){
    console.log("reading 2nd time")
    console.log(data);
})
let sum=0;
for(let i=0;i<10000000;i++)
{
    sum+=i;
}
console.log(sum);


// try{
//    const data= fs.readFileSync("g1.txt","utf-8");
//     console.log(data);

// }
// catch{
//     console.log(error)
// }
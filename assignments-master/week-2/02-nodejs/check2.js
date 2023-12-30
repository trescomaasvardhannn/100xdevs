const fs=require("fs");

fs.readFile("./todos.json","utf-8",(err,data)=>{
    console.log(data);
})
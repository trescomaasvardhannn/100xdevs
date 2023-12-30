const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs=require('fs');
const port=5000;
app.use(bodyParser.json());

app.get('/todos',(req,res)=>{
  fs.readFile('./todos.json',"utf-8",function(err,data){
    res.status(200).send(data);
    
    
  })
})

app.get('/todos/:id',(req,res)=>{

})
app.post('/todos',(req,res)=>{

})
app.put('/todos/:id',(req,res)=>{

})
app.delete('/todos/:id',(req,res)=>{

})
app.listen(port,()=>{
  console.log(`listening on port ${port}`)
})


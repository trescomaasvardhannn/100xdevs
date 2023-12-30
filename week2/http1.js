const express=require('express')

function square(n)
{
    return n*n;
}
const port=3000;
const app=express();
app.use(express.json());


app.get('/',(req,res)=>{
    const n=req.query.n;
    let ans=square(n);
    res.send(ans.toString());
    // res.send("hii there")
})
// app.post('/register',(req,res)=>{
//     let data=JSON.stringify(req.body)
//     console.log(data)
// })
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})

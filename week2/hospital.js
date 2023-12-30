const express=require('express');
const port=3000;
const app=express();
const zod=require('zod');
app.use(express.json())



const schema=zod.number();
const schema2=zod.object({
    email:zod.string().email(),
    password:zod.string().min(8),
})
const users=[
    {
        name:'John',
        kidneys:{
            healthy:false,
        },
        age:19
    },
    {
        name:'Mary',
        kidneys:{
            healthy:true,
        },
        age:65
    }
]


function userMiddleware1(req,res,next){
    if(username!='vardhan' || password!='mnd6')
    {
        res.status(403).json({
            msg:"incorrect input"
        })
    }
    else{
        next();
    }
}
app.get('/',userMiddleware1,(req,res)=>{
    const totalKidneys=users.length;
    let healthyKidney=0;
    let unhealthyKidneys=0;
    for(let i=0;i<totalKidneys;i++)
    {
        if(users[i].kidneys.healthy==true)
        {
            healthyKidney++;
        }
        else{
            unhealthyKidneys++;
        }
        // console.log(users[i].name)
        // console.log(users[i].kidneys.healthy)
    }
    
    res.json({
        totalKidneys,
        healthyKidney,
        unhealthyKidneys
    })
    
})
app.post('/',(req,res)=>{
    //adds a new patient
    const user=req.body;
    // users.push(user);
    // const age=user.age;
    const response=schema2.safeParse(req.body);
    // res.send(`pushed a new user ${user.toString()}`)
    res.send({
        response
    })
})
app.put('/',(req,res)=>{
    //convert all unhealthy to healthy

    const totalKidneys=users.length;
    let unhealthyKidneys=0;
    let healthyKidney=0;
    for(let i=0;i<totalKidneys;i++)
    {
        if(users[i].kidneys.healthy==false)
        {
            users[i].kidneys.healthy=true;
            healthyKidney++;
        }
        else{
            healthyKidney++;
        }

        
    }
    res.json({
        totalKidneys,
        healthyKidney,
        unhealthyKidneys
    })
})
app.delete('/',(req,res)=>{ 
    let newUsers=[];
    for(let i=0;i<users.length;i++)
    {
        if(users[i].kidneys.healthy)
        {
            newUsers.push(users[i]);
        }
    }
    res.status(202).send({
        newUsers
    })
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
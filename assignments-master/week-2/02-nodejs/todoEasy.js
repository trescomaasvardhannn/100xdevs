/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
  const express = require('express');
  const bodyParser = require('body-parser');
  const app = express();
  const port=5000;
  app.use(bodyParser.json());

  let todoList=[];
  let stid=1;
  app.get("/todos",(req,res)=>{
    res.json({todoList});
  })

  app.get("/todos/:id",(req,res)=>{
    let reqId=req.params.id;
    let found=false;
    todoList.forEach((item)=>{
      if(item.id==reqId){
        found=true;
        
        res.status(200).json(item)
      }
    })
    if(!found)
    res.status(404).send("Not Found");
  })

  app.post("/todos",(req,res)=>{
    req.body.id=stid;
    stid++;
    // const newItem=JSON.stringify(req.body);
    let newObj={};
    newObj["id"]=req.body.id;
    todoList.push(req.body);
    
    console.log("new task added");
    res.status(201).json(newObj);
  })
  app.put("todos/:id",(req,res)=>{
    let reqId=req.params.id;
    todoList.forEach((item)=>{
      if(item.id==reqId){
        found=true;
        item=req.body;
        res.status(200).send("OK");
      }
    })
    if(!found)
    res.status(404).send("Not Found");
  })

  app.delete("todos/:id",(req,res)=>{
    let reqId=req.params.id;
    for(let i=0;i<todoList.length;i++)
    {
      if(todoList[i].id===reqId)
      {
        found=true;
        todoList.splice(i,1);
        res.status(200).json("OK")
      }
    }
    if(!found)
    res.status(404).send("Not Found");
  })

  app.all("*",(req,res)=>{
    res.status(404)
  })
  app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
  module.exports = app;
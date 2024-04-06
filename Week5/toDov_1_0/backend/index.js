// write basic express with boilerplate code,
// with express.json() middleware
const express=require('express');
// We use {} to destructure the objects. Also, it is a cleaner way to write code
const {createTodo}=require('./types');
const {updateTodo}=require('./types');
const {todoDb}=require('./db')
const app=express();

app.get("/",async (req,res)=>{
    const todos= await todoDb.findall();
    // await todos;
    res.status(200).json(todos);
});



app.post("/todo",async (req,res)=>{
    const todoPayLoad=req.body;
    const todoParsedPayload=createTodo.safeParse(todoPayload);
    if(!todoParsedPayload.success){
        res.status(411).json({msg:"Something is wrong with the message"});
        return;
    }
    // put the payload in the DB.
    await todoDb.create({
        title: todoPayLoad.title,
        description: todoPayLoad.description,
        completed: false
    })
    res.status(200).json({msg:"To do added to DB"});
    

});
app.put("/completed",async (req,res)=>{
    const updatePayload=req.body;
    const parseUpdatePayload=updateTodo.safeParse(updatePayload);
    if(!parseUpdatePayload.success){
        res.status(411).send({msg:"Wrong format of the ID"});
        return;
    }

    // put the stuff in DB
  
    await todoDb.updateOne(
        {_id:updatePayload._id},
        {completed:"true"}
    ).then(function(){
        res.status(200).json({msg:"Updated todo"})
    });



});
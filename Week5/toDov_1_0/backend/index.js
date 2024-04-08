// write basic express with boilerplate code,
// with express.json() middleware
const express=require('express');
// We use {} to destructure the objects. Also, it is a cleaner way to write code
const {createTodo}=require('./types');
const {updateTodo}=require('./types');
const {todo}=require('./db')
const app=express();
const cors=require("cors");
app.use(cors())
app.use(express.json());

app.get("/",async (req,res)=>{
    const todos= await todo.find();
    // res.json({
    //     todos: []
    // })
    // await todos;
    res.status(200).json(todos);
});



app.post("/todo",async function(req,res){
    const todoPayLoad= req.body;
    console.log("Title:"+todoPayLoad.title, todoPayLoad.description,todoPayLoad.completed);
    const todoParsedPayload=createTodo.safeParse(todoPayLoad);
    if(!todoParsedPayload.success){
        res.status(411).json({msg:"Something is wrong with the message"});
        return;
    }
    // put the payload in the DB.
    await todo.create({
        title: todoPayLoad.title,
        description: todoPayLoad.description,
        completed: todoPayLoad.completed
    })
    res.status(200).json({msg:"To do added to DB"});
    

});

app.put("/completed",async function(req,res){
    const updatePayload=req.body;
    console.log("ID is:"+updatePayload._id);
    const parseUpdatePayload=updateTodo.safeParse(updatePayload);
    console.log(parseUpdatePayload);
    if(!parseUpdatePayload.success){
        res.status(411).send({msg:"Wrong format of the ID"});
        return;
    }

    // put the stuff in DB
  
   console.log("Hello");
   await todo.findByIdAndUpdate(
    {_id:updatePayload._id},
    {completed: true}
   )
    // await todo.update({
    //     _id: req.body._id
    // }, {
    //   completed: true  
    // })
    res.status(200).json({msg:"Updated todo"});
    



});

app.listen(3000);
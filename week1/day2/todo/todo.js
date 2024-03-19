const express = require('express');
  const bodyParser = require('body-parser');
  
  const app = express();
  
  app.use(bodyParser.json());
const todoList=[
  {
    name:"Sunny",
    tasks: [{
      id:'1',
      task:'bath'
    },
    {
      id:'2',
      task:'riyaz'
    }]
  },
  {
    name:"Sam",
    tasks: [{
      id:'1',
      task:'QA test'
    }]
  }
]

app.listen(3000);
app.get("/",function(req,res){
  res.json(todoList);
})

app.use(bodyParser.json());
app.post('/add',function(req,res){
  const taskId=req.body.id;
  console.log(taskId);
  const taskDesc=req.body.task;
  console.log(taskDesc);
  todoList[0].tasks.push({
    id: taskId,
    task: taskDesc
  });
  res.status(200).json("Task Added");
})
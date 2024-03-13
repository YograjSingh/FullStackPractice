// create the same using springboot java
const express=require('express')
const bodyParser = require('body-parser'); 
const port=3000
const app=express()
const todo=["work1","To buy Prius"];
const todoJsonList={
    "items":[
      {
        "id" : 0,
        "text": "Learn about Polymer",
        "created_at": "Mon Apr 26 06:01:55 +0000 2015",
        "Tags": [
          "Web Development",
          "Web Components"
        ],
        "is_complete" : true
      },
      {
        "id" : 1,
        "text": "Learn about Polymer",
        "created_at": "Mon Apr 26 06:01:55 +0000 2015",
        "Tags": [
          "Web Development",
          "Web Components"
        ],
        "is_complete" : true
      },

    ]
    }
// listen basically attaches a port to 
app.listen(port, ()=>{
    console.log("Todo server is listening at port ${port}")
})


app.get('/', (req, res) =>{
    if(todo.length==0){
        res.send("There is nothing. Add something");
    }
    else{
        res.send('<h1>These are to do </h1>'+ JSON.stringify(todoJsonList) );
        
        // res.send('<h1>These are to do </h1>'+ JSON.parse(JSON.stringify(todo)) );
    }
})
app.use(bodyParser.json()); //this helps us to extract the json from the body, if we ever have it
app.post('/addToDo',(req,res)=>{
    console.log(req.headers);
    res.send({
        "id" : 20,
        "text": "Learn about Polymer",
        "created_at": "Mon Apr 26 06:01:55 +0000 2015",
        "Tags": [
          "Web Development",
          "Web Components"
        ],
        "is_complete" : true
      });
})

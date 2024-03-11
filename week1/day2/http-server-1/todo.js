// create the same using springboot java
const express=require('express')
const bodyParser = require('body-parser'); 
const port=3000
const app=express()
const todo=["work1","To buy Prius"];
// , "Get a product"];
app.listen(port, ()=>{
    console.log("Todo server is listening at port ${port}")
})


app.get('/', (req, res) =>{
    if(todo.length==0){
        res.send("There is nothing. Add something");
    }
    else{
        res.send( JSON.parse(JSON.stringify(todo)) );
    }
})
app.use(bodyParser.json()); 
app.post('/addCars',(req,res)=>{
    const requestData="hello";
    todo.push(requestData.stringify);
    console.log("To do to Add:"+requestData);
    res.status(200).send("New To do Received succesfully");

})

const express= require('express');
const app=express();

app.use(express.json());
//kidneys=[1,2];
app.post("/health-checkup",function(req,res){
    const kidneys=req.body.kidneys;
    const kidneyLength=req.body.kid;

    res.send("you have "+kidneyLength+" kidneys");
});


app.listen(3000);
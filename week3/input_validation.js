const express=require('express');

const app = express();

app.get('/', function(req, res){
    const username = req.query.username;
    const password = req.query.password;
    const kidneyId=req.query.kidneyId;
    
    
    if(username==="sunny" && password==="pass"){
        if(kidneyId==1|| kidneyId==2){
            res.json({
                mes:"Your kidney is fine"
            })
        }else{
            res.json({
                msg:"bad input"
            })
        }
    }
    res.status(400).json({msg:"Something is wrong with the input"});
});



const express=require('express')
const app = express();
// we can give more than 1 callback functions
app.get("/watch-match",function (req,res,next) {
        console.log("Hello from req1");
        next();
},function(req,res,next) {
    console.log("Hello from req2");
    next();
},function (req,res) {
    console.log("Hello from req3");
    res.send("Hello world, this is the last one")
    
});

app.listen(3000);
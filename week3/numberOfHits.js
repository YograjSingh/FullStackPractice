const express=require('express');
const app = express();

let numberOfRequests = 0;
function calculateNumberOfRequests(req, res,next) {
    numberOfRequests++;
    console.log('Number of requests->'+numberOfRequests);
    next();
    
}
// this means, this middleware will be called everywhere.
// any request which comes AFETR this line, will have this middleware added
app.use(calculateNumberOfRequests);
app.get("/", ()=>{
    console.log("Hello");

});
app.post("/write",function(req,res){

    res.json({
        messsage:"Hello there"
    })
});
app.listen(3000);
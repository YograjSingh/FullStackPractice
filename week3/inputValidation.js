// this application will take an array as an input in a JSON
// Example:
// {
//     "kidneys": [1,2]
// }
const express=require('express')
const app = express();
app.use(express.json());
app.post("/health-checkup",function(req,res){
    const kidneys=req.body.kidneys;
    const kidneyLength=req.body.length;

    console.log("Hello:"+kidneys);
    res.send("You have "+kidneyLength+" kidneys");
});
app.listen(3000)
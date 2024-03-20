// this application will take an array as an input in a JSON
// Example input:
// {
//     "kidneys": [1,2]
// }
const express=require('express')

const zod=require('zod');
const app = express();
const schema = zod.array(zod.number());
app.use(express.json());
app.post("/health-checkup",function(req,res){
    const kidneys=req.body.kidneys;
    const response=schema.safeParse(kidneys);
    if(response.success==false){
        res.status(411).json({
            msg:"input is valid"
        });
    }
    const kidneyLength=req.body.length;
    
    res.send(response);
});

app.listen(3000)
app.use(function(err,req, res,next){
    res.json({
        msg:"Something is wrong with our server"
    })
})
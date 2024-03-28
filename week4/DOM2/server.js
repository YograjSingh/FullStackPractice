const express=require('express');
const app = express();
const cors=require('cors');
app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));

app.get("/add",function (req,res) {
    const n1=parseInt(req.query.n1);
    const n2=parseInt(req.query.n2);
    let sum=(n1)+(n2);
    res.send("Value is "+sum);
    
});
app.listen(3000);
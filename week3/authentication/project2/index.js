const mongoose=require("mongoose");
const express=require("express");
const app=express();
const UserModel=require('./user.model');

mongoose.connect("mongodb+srv://sunny:sunny@user_app.8khwmxq.mongodb.net/users")
.then(()=>{
    console.log("Connected to the DB");
}).catch(()=>{
    console.log("Failed to connect");
});


app.use(express.json());

app.post("/signup",async function(req,res){
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    try {
        await UserModel.create({name:name,email:email,password:password});
        res.status(200).json({msg:"Data sent"});
        
    } catch (error) {
        res.status(404).send(error.message);
        
    }

    // const user=new User({
    //     name:name,
    //     email:email,
    //     password:password
    // });
    // await user.save().then(doc=>{
    //     res.send(doc);
    // });
    // // console.log(user.save());
    // res.json({msg:"User created success"});

});


app.listen(3000);


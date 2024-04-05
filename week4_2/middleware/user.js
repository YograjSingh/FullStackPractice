const {User}= require("../db");
const {JWT_SECRET}=require("../config/config");
function userMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;

    User.findOne({username: username, password: password})
    .then(function(value){
        if(value){next();}
        else{
            res.status(403).json({message:"User not found"});
        }
    })


}
module.exports=userMiddleware;
const jwt=require("jsonwebtoken");
const {JWT_SECRET}=require("../config/config");
const {User}=require("../db");

function userMiddleware(req, res, next) {
    const token=req.headers.authorization;
    const words=token.split(" ");
    const jwtToken=words[1];
    const decodedValue=jwt.verify(jwtToken,JWT_SECRET);
    console.log("Hello");
    console.log(req.headers);
    console.log(decodedValue);
    if(decodedValue.username){
        // This is how we get the username. This way we dont take the username in a request from the user.
        // By doing this, we are 
        req.username=decodedValue.username;
        console.log(req.username);
        next();
    }else{
        res.status(403).json({
            message: "You are not authenticated"
        })
    }
    
}
module.exports=userMiddleware;
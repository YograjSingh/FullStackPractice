const jwt=require("jsonwebtoken");
const jwt_secret=require("../index");
const {User}=require("../db");

function userMiddleware(req, res, next) {
    const token=req.headers.authorization;
    const words=token.split(" ");
    const jwtToken=words[1];
    const decodedValue=jwt.verify(jwtToken,jwt_secret);
    if(decodedValue.username && decodedValue.type=="user"){
        next();
    }else{
        res.status(403).json({
            message: "You are not authenticated"
        })
    }
    
}
module.exports=userMiddleware;
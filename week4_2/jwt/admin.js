const jwt=require("jsonwebtoken");
// const jwt_secret=require("../index");
const {JWT_SECRET}=require("./config");
const {Admin} =require("../db")

// Middleware for handling authentication
function adminMiddleware(req,res,next) {
// Implementing admin aithentication logic
const token=req.headers.authorization;
const words=token.split(" ");
const jwtToken=words[1];
const decodedValue=jwt.verify(jwtToken,JWT_SECRET);
if(decodedValue.username && decodedValue.type=="user"){
    next();
}
else{
    res.status(403).json({
    message:"YOu are not authenticated"
})
}
module.exports = adminMiddleware;
}

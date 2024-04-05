const jwt=require("jsonwebtoken");
// const jwt_secret=require("../index");
const {JWT_SECRET}=require("../config/config");
const {Admin} =require("../db")

// Middleware for handling authentication
function adminMiddleware(req,res,next) {
// Implementing admin aithentication logic
console.log(req.headers)
const token=req.headers.authorization;
const words=token.split(" ");
const jwtToken=words[1];
console.log(jwtToken);
const decodedValue=jwt.verify(jwtToken,JWT_SECRET);
console.log(decodedValue);
if(decodedValue.username){
    console.log("Helllo");
    next();
}
else{
    res.status(403).json({
    message:"YOu are not authenticated"
})
}

}
module.exports = adminMiddleware;

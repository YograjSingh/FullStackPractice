const {Admin} =require("../db")

// Middleware for handling authentication
function adminMiddleware(req,res,next) {
// Implementing admin aithentication logic
// We need headers here and validate admin from the admin DB
const username = req.headers.username;
const password = req.headers.password;
const {JWT_SECRET}=require("../config/config");
    Admin.findOne({
    username: username,
    password: password
})
.then(function(value)
{
    console.log("Username:"+value.username);
    console.log(value);
    if(value){
        next();
    }else{
        res.status(403).json(
            {msg: "Admin does not exist."}
        )
    }
}).catch(function(err){
    res.json({msg:"Something is wrong"})
});


}
module.exports = adminMiddleware;



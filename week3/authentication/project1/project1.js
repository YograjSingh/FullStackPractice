// fetching required libraries
const express=require("express");
const jwt=require("jsonwebtoken");

const app = express();
// password
const jwtPassword="123456"

const ALL_USERS=[
    {
        userid:1,
        userName:"SteveJobs",
        job:"Product Designer",
        products:["iPhone","iPod"]
    },
    {
        userid:2,
        userName:"Gates",
        product:["GateNotes","XP"]
    },
    {
        userid:3,
        userName:"Linus",
        product:["Linux Kernel"]
    }
];

function userExists(username, password) {
    // logic to return true or false if the user exist
    // in ALL_USERS array

}



app.post("/signin",function(request,response){
    const username=request.body.usernames;
    const password=request.body.password;
    if(!userExists(username,password)){
        return response.status(403).json({
            msg:"User does not exist in our memory"
        });
    }
    // this creates the token. It takes a json as a input and creates a very 
    // long input and return it. And it gets stored in the locl storage.
    var token=jwt.sign({username:username},jwtPassword);
    return res.json({
        token,
    })
});

app.get("/users",function(request,response){
    // gets the token from the headers
    const token=req.headers.authorization;
    try {
        // this function will verify the generated TOKEN using the JWTPassword
        const decoded=jwt.verify(token,jwtPassword);
        const usernames=decoded.username;
        // return a list of users othet than this username
    } catch (error) {
        return res.status(403).json({
            msg:"Inavlid token"
        });
        
    }
});

app.listen(3000);

app.use(function(err,request,response,next){
    res.json({msg:"Wrong or Invalid endpoint"})
});
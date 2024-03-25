// Two primary functions we need:
// Encoding stuff-convert json to string
// verifying - verify whethetr teh string is from the correct user.

// fetching required libraries
const express=require("express");
const jwt=require("jsonwebtoken");

const app = express();
app.use(express.json());
// password/secret. Normally this is stored in some vault or some secret place
const jwtPassword="123456"

// in memory DB-basically using a variable instead of a DB for now
const ALL_USERS=[
    {
        userId:1,
        username:"SteveJobs",
        password:123,
        job:"Product Designer",
        products:["iPhone","iPod"]
    },
    {
        userId:2,
        username:"Gates",
        password:1234321,
        product:["GateNotes","XP"]
    },
    {
        userId:3,
        username:"Linus",
        password:1235,
        product:["Linux Kernel"]
    }
];

function userExists(username, password) {
    // logic to return true or false if the user exist
    // in ALL_USERS array
    
    let userExist=false;
    for(let i=0;i<ALL_USERS.length;i++){
        if(ALL_USERS[i].username==username & ALL_USERS[i].password==password){
            console.log(ALL_USERS[i].username)
            console.log(ALL_USERS[i].password)
            userExist=true;
            // console.log(userExist);
        }
    }
    // above logic using find function-just uncomment the below 
    // lines and comment the above to check logic
    // userExist=ALL_USERS.find((user)=>{user.username==username && user.password==password});
   return userExist;
}

//Sample input via postman
// http://localhost:3000/signin
// in Body:{
//     "username": "Linus",
//     "password": 1235
// }

app.post("/signin",function(request,response){
    const username=request.body.username;
    const password=request.body.password;
    console.log(userExists(username,password))
    if(!userExists(username,password)){
        return response.status(403).json({
            msg:"User does not exist in our memory"
        });
    }
    // this creates the token. It takes a json as a input and creates a very 
    // long input and return it.
    // Since we are signing it with username, whenever we try decoding the token
    // it will give the username(in this case)
    var token=jwt.sign({username:username},jwtPassword);
    return response.json({
        token,
    })
});

//Sample input via postman


app.get("/users",function(request,response){
    // gets the token from the headers
    const token=request.headers.authorization;
    console.log(token);
    try {
        // this function will verify the generated TOKEN using the JWTPassword
        const decoded=jwt.verify(token,jwtPassword);
        // this is what we are getting from the token which is passed in the header using postman
        const userName=decoded.username;
        console.log(userName);
        // return a list of users other than this username
        return response.json({
            users:ALL_USERS.filter((user)=>{
                if(user.username!=userName){
                    return true;
                }else{
                    return false;
                }
            })
        })
    } catch (error) {
        return response.status(403).json({
            msg:"Inavlid token"
        });
        
    }
});


app.listen(3000);
// app.use(function(err,request,response,next){
//     response.json({msg:"Wrong or Invalid endpoint"})
// });


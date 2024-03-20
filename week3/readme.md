# Middlewares and Global catches
### Middleware
Middlewares basically does the checks which are needed to be done before any actions is taken.
Basically if we want to do some pre checks before any request in Node, we will put that in a function called middleware and use it.

Formal definition:
The middleware in node. js is a function that will have all the access for requesting an object, responding to an object, and moving to the next middleware function in the application request-response cycle.

Middleware functions can perform the following tasks:
- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.

## Using next function
next itself is a callback function which is used to call the next function in the line.
We can pass any number of callbacks in 

```
const express=require('express')
const app = express();
// we can give more than 1 callback functions
app.get("/watch-match",function (req,res,next) {
        console.log("Hello from req1");
        next();
},function(req,res,next) {
    console.log("Hello from req2");
    next();
},function (req,res) {
    console.log("Hello from req3");
    res.send("Hello world, this is the last one")
    
});

app.listen(3000);
```
Note that, the last function does not have the next method.

## app.use()
This method helps to tell the compiler that use the function which is given in as a parameter to use() as a middleware functions. And, every function which is called after the app.use() will have the function as a middleware function.

```
const express=require('express');
const app = express();

let numberOfRequests = 0;
function calculateNumberOfRequests(req, res,next) {
    numberOfRequests++;
    console.log('Number of requests->'+numberOfRequests);
    next();
    
}
// this means, this middleware will be called everywhere.
// any request which comes AFETR this line, will have this middleware added
app.use(calculateNumberOfRequests);
app.get("/", ()=>{
    console.log("Hello");

});
app.post("/write",function(req,res){

    res.json({
        messsage:"Hello there"
    })
});
app.listen(3000);

```

## Global catches
At the end, we define a the end. These are required so that if a user sends some wrong input, it is natural for compiler to throw an Exception or error.
Hence, gloabl catches helps us to catch those and return a concise message.
Example:
```
const express=require('express')
const app = express();
app.use(express.json());
app.post("/health-checkup",function(req,res){
    const kidneys=req.body.kidneys;
    const kidneyLength=req.body.length;

    console.log("Hello:"+kidneys);
    res.send("You have "+kidneyLength+" kidneys");
});

app.listen(3000)
app.use(function(err,req, res,next){
    res.json({
        msg:"Something is wrong with our server"
    })
})

```
So, as in above, we are expecting a JSON body request. 
However, if we pass some other type in the Request body, the compiler should throw an exception which will be handled by the app.use at the end.


### Error Handling middlewares
Specaial type of middlewre function in Express that has 4 arguments (err,req,res,next). Express recognizes it as an error handling middleware because of these 4 arguments.

# Zod
[text](https://zod.dev/)
```s
npm install zod
```
```
// this application will take an array as an input in a JSON
// Example input:
// {
//     "kidneys": [1,2]
// }
const express=require('express')

const zod=require('zod');
const app = express();
const schema = zod.array(zod.number());
app.use(express.json());
app.post("/health-checkup",function(req,res){
    const kidneys=req.body.kidneys;
    const response=schema.safeParse(kidneys);
    if(response.success==false){
        res.status(411).json({
            msg:"input is valid"
        });
    }
    const kidneyLength=req.body.length;
    
    res.send(response);
});

app.listen(3000)
app.use(function(err,req, res,next){
    res.json({
        msg:"Something is wrong with our server"
    })
})

```
## Coersion of Zod
Zod now provides convinient way to coerce primitive data
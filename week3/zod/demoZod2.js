// Write a code to validate a json entry coming in using ZOD

const express=require('express')

const zod=require('zod');
const app = express();



function validateSchema(userObj){
    // Defining an object schema using Zod
    const objSchema=zod.object({
        username:zod.string().min(4),
        email: zod.string().email(),
        password: zod.string().min(4),
        country:zod.literal("IN").or(zod.literal("US"))
    });
    // passing the obj which we took as a params to the object schema
    const isValidData=objSchema.safeParse(userObj);
    console.log(isValidData);
    // returning the output
    return isValidData;

}
// Usage example
validateSchema(
    {
        username:"mnmjkh",
        email: "sunny@gmail.com",
        password: "juggjkgkgj",
        country: "IN"
    }
)

app.use(express.json());
// using Zod in a post method
app.post("/login",function(req,res){
    if(!validateSchema(req.body).success){
        res.json({
            msg:"Data entered is invalid"
        });
        return;
    }
    res.send(validateSchema(req.body));
})

app.listen(3000)
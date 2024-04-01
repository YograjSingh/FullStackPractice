const {Router} =require("express");

const adminMiddleware=require("../middleware/admin");
const {Admin}=require("../db/index");
const {Course}=require("../db/index");
const jwt=require("jsonwebtoken");
// const JWT_SECRET_KEY = require("..");
const {JWT_SECRET}=require("../jwt/config");
const router=Router();

router.post('/signup', (req,res) => {
    const username=req.body.username;
    const password=req.body.password;
    console.log(username);

    Admin.create({
        username: username, 
        password: password
    }).then(() => {
        res.status(200).json(
            {Message:"Admin created successfully"})
    }).catch(err => res.send(err.message));
    
      
});
router.post('/signin',async (req,res) => {
    const username=req.body.username;
    const password=req.body.password;
    console.log(JWT_SECRET);
    const user=await Admin.find({ username: username, password: password});
    if(user){
        const token=jwt.sign({
            username
        },JWT_SECRET);
        res.json({
            "token": token
        })
    }else{
        res.status(411).json({
            message: "Incorrect email and pass"
        })
    }
    

})
/*
Example:
http://localhost:3000/admin/courses
{
    "title": "Development with C++",
    "description": "Teaches you to develop clean development",
    "imageLink": "imageLink",
    "price": 30
}
*/
router.post('/courses',adminMiddleware,async (req,res) => {
    const title=req.body.title;
    const description=req.body.description;
    const imageLink=req.body.imageLink;
    const price=req.body.price;
    let newCourse;
    try {
         newCourse=await Course.create({
            title: title,
            description: description,
            imageLink: imageLink,
            price: price
        });
        // console.log(newCourse);
    } catch (error) {
        res.status(403).json({message:error});
        // console.log(newCourse);
    }
    // console.log(newCourse);
    
    
    res.status(200).json({
        message:"Course created successfully",
        details: newCourse._id+" and the price is "+newCourse.price
    });
});

router.get('/courses',adminMiddleware,async (req,res) => {
    // one way of doing this
    const response=await Course.find({});

        res.status(200).json({
            courses: response
        })
    
})

module.exports = router;
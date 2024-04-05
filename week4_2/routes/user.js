const Router=require("express");
const jwt=require("jsonwebtoken");
const {JWT_SECRET}=require("../config/config");


const {User}=require("../db/index")
const {Course}=require("../db/index");


const userMiddleware = require("../jwt/user");

const router=Router();

router.post("/signup",(req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    User.create({username: username, password: password})
    .then(function(){
        res.status(200).json({msg:req.body.username+" Sign up successfully"});
    }).catch(function(err){
        res.status(403).json({msg:err.message});
    });

});
router.post('/signin',async (req,res) =>{
    const username=req.body.username;
    const password=req.body.password;
   
    const user=await User.find({ username: username, password: password});
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


router.get('/courses',async (req,res) => {
    // one way of doing this
    const response=await Course.find({});

        res.status(200).json({
            courses: response
        })
    
})

router.post("/course/:courseId",userMiddleware,(req,res) => {
    const username = req.username;
    console.log(username);
    const courseId=req.params.courseId;
    User.updateOne(
        {username: username},
        { $push: { purchasedCourses: courseId } }
    ).then(function(){
        res.status(200).json({msg:"Purchase course success"})
    });

});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    console.log("Hello");
    const user=await User.findOne({
        username: req.username
    });
    const courses=await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    });
    console.log(user);
    res.json({PurchasedCourses:courses})
    
});

module.exports = router


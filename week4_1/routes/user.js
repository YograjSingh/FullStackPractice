const Router=require("express");

const userMiddleware = require("../middleware/user");

const router=Router();

router.post("/signup",(req,res) => {

});

router.get("/courses",(req,res) => {

});

router.post("/coures/:courseId",(req,res) => {

});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    
});

module.exports = router


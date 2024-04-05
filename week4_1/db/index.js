const mongoose=require("mongoose");

// creating connection to MongoDB
if(mongoose.connect("mongodb+srv://sunny:sunny@admin.8khwmxq.mongodb.net/Courses")){
    console.log("DB Connected");
}else{
    console.log("DB connection failed");
}

// Defining schemas:
const AdminSchema=new mongoose.Schema({
    username: String,
    password: String
});
const UserSchema=new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
});
const CourseSchema=new mongoose.Schema({
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

// Defining Model
const Admin=mongoose.model('Admin',AdminSchema);
const User=mongoose.model('User',UserSchema);
const Course= mongoose.model('Course',CourseSchema);

module.exports={
    Admin,
    User,
    Course
};


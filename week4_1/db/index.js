const mongoose=require("mongoose");

// creating connection to MongoDB
mongoose.connect("mongodb+srv://sunny:sunny@admin.8khwmxq.mongodb.net/");

// Defining schemas:
const AdminSchema=new mongoose.Scheme({});
const UserSchema=new mongoose.Scheme({});
const CourseSchema=new mongoose.Scheme({});

// Defining Model
const AdminModel=new mongoose.Model('Admin',AdminSchema);
const UserModel=new mongoose.Model('User',UserSchema);
const CourseModel=new mongoose.Model('Course',CourseSchema);

module.exports={
    AdminModel,
    UserModel,
    CourseModel
};
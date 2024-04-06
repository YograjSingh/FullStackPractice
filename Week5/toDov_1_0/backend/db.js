const mongoose=require('mongoose');
const mongodbURL="mongodb+srv://sunny:sunny@admin.8khwmxq.mongodb.net/"
mongoose.connect(mongooseURL);
const todoSchema=mongoose.Schema({
    title: String,
    description: String,
    completed:Boolean
 });

 const todo=mongoose.model('todos',todoSchema);
 
 module.exports={
    todo
 }
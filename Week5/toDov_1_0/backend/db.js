const mongoose=require('mongoose');
const mongooseURL="mongodb+srv://sunny:sunny@admin.8khwmxq.mongodb.net/todos"
if(mongoose.connect(mongooseURL)){
    console.log("DB connected")
}else{
    console.log("Not connected")
}
const todoSchema=mongoose.Schema({
    title: String,
    description: String,
    completed:Boolean
 });

 const todo=mongoose.model('todos',todoSchema);

 
 module.exports={
    todo
 }
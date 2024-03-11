// Write a program that prints all the male people’s first name given a complex object
var user=[{firstName:"John", lastName:"Doe",gender:"male", age:50, eyeColor:"blue"},
{firstName:"Priya", lastName:"Doe",gender:"female", age:50, eyeColor:"blue"},
{firstName:"James", lastName:"Doe",gender:"male", age:50, eyeColor:"blue"},
{firstName:"Jamie", lastName:"Doe",gender:"female", age:50, eyeColor:"blue"},
{firstName:"John", lastName:"Doe",gender:"male", age:50, eyeColor:"blue"}];

for(var i=0; i<user.length; i++){
    if(user[i].gender=="male"){
        console.log(user[i].firstName);
    }
}

## Create a course selling website

### Description
You need to implement a course selling app. Make sure you setup your own mongodb instance before starting. 
It needs to support two types of users - 
1. Admins
2. Users

Admins are allowed to sign up, create courses.
Users are allowed to sign up, view courses, purchase courses.
This in the real world would translate to an app like udemy.

This one doesn't use authentication the right way. We will learn how to do that in the next assignment. 
For this one, in every authenticated requests, you need to send the username and password in the headers (and not the jwt).
This is the reason why this assignment doesn't have a sign in route.

You need to use mongodb to store all the data persistently.

## Routes
### Admin Routes:
- POST /admin/signup
  Description: Creates a new admin account.
  Input Body: { username: 'admin', password: 'pass' }
  Output: { message: 'Admin created successfully' }
- POST /admin/courses
  Description: Creates a new course.
  Input: Headers: { 'username': 'username', 'password': 'password' }, Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' }
  Output: { message: 'Course created successfully', courseId: "new course id" }
- GET /admin/courses
  Description: Returns all the courses.
  Input: Headers: { 'username': 'username', 'password': 'password' }
  Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }

### User routes
- POST /users/signup
  Description: Creates a new user account.
  Input: { username: 'user', password: 'pass' }
  Output: { message: 'User created successfully' }
- GET /users/courses
  Description: Lists all the courses.
  Input: Headers: { 'username': 'username', 'password': 'password' }
  Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }
- POST /users/courses/:courseId
  Description: Purchases a course. courseId in the URL path should be replaced with the ID of the course to be purchased.
  Input: Headers: { 'username': 'username', 'password': 'password' }
  Output: { message: 'Course purchased successfully' }
- GET /users/purchasedCourses
  Description: Lists all the courses purchased by the user.
  Input: Headers: { 'username': 'username', 'password': 'password' }
  Output: { purchasedCourses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }



  # Steps to acoomplish this:
- Get the MOngo DB URL: mongodb+srv://username:password@admin.8khwmxq.mongodb.net/
- Create a DB: courses
- And also a collection: courses--> MongoDB requires one to create at least one table(called collection in MongoDB terminology) before when a new DB is created.
- Create the required directories:
```
.../week4_1> mkdir db
.../week4_1> mkdir middleware
.../week4_1> mkdir routes
.../week4_1> touch index.js
```

- Create the required files in the above created directories:
```
.../week4_1> touch index.js
.../week4_1> touch db/index.js
.../week4_1> touch middleware/admin.js
.../week4_1> touch middleware/user.js
```
- Add code for main index.js file

### Configuration of Database details

```
// creating connection to MongoDB
mongoose.connect("connection string");

// Defining schemas:
const AdminSchema=new mongoose.Scheme({
    username: String,
    password: String
});
const UserSchema=new mongoose.Scheme({
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
});
const CourseSchema=new mongoose.Scheme({
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

// Defining Model
const AdminModel=new mongoose.Model('Admin',AdminSchema);
const UserModel=new mongoose.Model('User',UserSchema);
const CourseModel=new mongoose.Model('Course',CourseSchema);

module.exports={
    AdminModel,
    UserModel,
    CourseModel
};


```

### Configuring the Middelware
Middlware helps in improving the request response flow by authenticating the object, looking up for things in the DB etc. etc.
and then pass the values to the routes.

```
const {Admin} =require("../db")

// Middleware for handling authentication
function adminMiddleware(req,res,next) {
// Implementing admin aithentication logic
// We need headers here and validate admin from the admin DB
const username = req.headers.username;
const password = req.headers.password;
Admin.findOne({
    username: username,
    password: password
})
.then(function(value)
{
    if(value){
        next();
    }else{
        res.status(403).json(
            {msg: "User does not exist."}
        )
    }
});

}
module.exports = adminMiddleware;




```


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
## Why dont we let the user hit the DB directly? Why do we have a HTTP server in between?
1. Databases were created using protocols which browsers dont understand.
2. Databses dont have granual access as a first class citizen. Very hard to do user specific access in them.
3. Some Databases are there which have removed the HTTP server and try their best to provide granular access.


# Primitives provided by DB
1. Create data
2. Read data
3. Update data
4. Delete data

## What API do we use?
1. Mongoose library
2. Prisma


## How to use Mongoose?
1. Step 1: Define a schema. The way to do so is given below:
  - const userSchema=new mongoose.Schema({
  username: String,
  password: String
  })
2. Step 2: Defin the model.
  - const user=mongoose.model('User',userScheme);
- Step 3: Insert or create data:
  - user.create({
  usename:"jack",
  password:"hello123"
  })

  OR
- If the data is coming in with a request:
    - user.create({
  usename:req.body.username,
  password:req.body.password
  })
3. Read from the DB
   - user.findById("1);
   - user.find({
  username:"jack@google.come"
  })
   - user.updateOne(
  {"id":"1"},
  {$push:{purchasdsdedCourse: courseId}}
  )

## 3 technical jargons of DB
1. Cluster
2. Database
3. Tables


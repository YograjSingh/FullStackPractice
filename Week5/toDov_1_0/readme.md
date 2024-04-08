## ToDo App
This project containes a simple TODO application.

### Features:
1. Create todo
2. See existing Todos
3. Mark to dos as done

# Steps
## Creating Back end:
1. mkdir backend
2. cd backend
3. npm init
```
   package name: (backend) todo-backend
version: (1.0.0)                                                                                                          
description: This is a simple to do application backend                                                                   
entry point: (index.js)
test command:                                                                                                             
git repository:                                                                                                           
keywords:                                                                                                                 
author: 98sunny
license: (ISC)                                                                                                            
About to write to E:\0_100\Full_Stack_Practice\week5\toDov_1_0\backend\package.json:

{
  "name": "todo-backend",
  "version": "1.0.0",
  "description": "This is a simple to do application backend",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "98sunny",
  "license": "ISC"
}

```
package.json contains all the libraries and package we will need.

4. npm install express
5. touch index.js
6. Add the middleware app
7. Create the Zod patterns which you created.
8. create the database cdonnection.
9. Test back end.
```
POST-http://localhost:3000/todo
{
    "title": "cook dessert",
    "description": "kheer"
    ,"completed":false
}

GET-http://localhost:3000/

PUT- http://localhost:3000/completed

{
    "_id": "6611bc68aa3042ce68c65125"
}
```
10. Start with front end.

# Creating Front end
1. npm create vite@latest
2. project name: frontend
3. npm run i
4. npm run dev


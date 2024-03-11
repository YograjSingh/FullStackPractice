# Creating an HTTP server

## Steps:
1.  Command-line instruction used to create a package. json file for a Node. js package
```
npm init -y
```
And, then install express package:
```
npm install express
```
2. craete index.js
3. Run the command in the terminal:
   ```npm install express```
4. Create a file called index.js
```
const express=require("express");
```
5. Code to write and expose our HTTP Server, add these to index.js:
   ```
const app = express();
const port=3000
app.get('/',(req,res)=>{
    res.send('Hello World');
})
app.listen(port, ()=>{
    console.log("Example app listening on port ${port}");
})
   ```





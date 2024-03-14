/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
Response: 200 OK with an array of file names in JSON format.
Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
 Description: Use the filename from the request path parameter to read the file from `./files/` directory
 Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
 Example: GET http://localhost:3000/file/example.txt
- For any other route not defined in the server return 404
Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const directoryPath='files';

const path = require('path');
const app = express();

app.listen(3000);
app.get('/files', function (req, res) {
    fs.readdir(path.join(__dirname, './files/'), (err, files) => {
    if (err) {
        
        return res.status(500).json({ error: 'Failed to retrieve files' });
    }
    console.log(path.join(__dirname, './files/'));
    res.json(files);
    
    });
});

app.get("/files/:fileName",function(req,res) {
    const filepath = path.join(__dirname, './files/', req.params.fileName);
    console.log(filepath);
    fs.readFile(filepath, 'utf8', (err, data) => {
        if(err) {
            return res.status(404).send('File not found');
        }
        res.json({"path":filepath,"content":data});
    })
    // const fileName=path.join(__dirname,'./files/',req.params.fileName);
    // console.log("FileName:"+fileName);
    // var content="";
    // var path;
    // console.log(fileName);
    // if(fileName.length!=0){
    //     path="./files/"+fileName;
        
    //     console.log(content);
   

    // }
    // content=fs.readFileSync(path,'utf8');

    // if(content.length!=0){
    //     res.json({
    //         fileName,
    //         content
    //     })

    // }else {
    //     res.status(404).send("File is empty");
    // }
    
    
    // // res.send(content);
    
})
app.all('*',(req,res)=>{
    res.status(404).send("Route not found");
})

module.exports = app;
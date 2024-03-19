// Reading the contents of a file
// Write code to read contents of a file and print it to the console. You can use the fs library to as a black box, the goal is to understand async tasks. Try to do an expensive operation below the file read and see how it affects the output. Make the expensive operation more and more expensive and see how it affects the output.

function readContentFromFile(){
    const fs=require('fs');
    var path = require('path');
    const newPath=path.join(__dirname,'./files','test.txt');
    console.log("hello"+newPath);
    
    fs.readFile(newPath, 'utf8', function(err,data){
        if(err){throw err;}
        console.log("Before Everything in the file is read");
        console.log(data);
        console.log("Everything in the file is read");
    })

}

async function main(){
    await readContentFromFile();
    console.log("in the main method");
    
}

count=0;
for(let i=0;i<1000000000;i++){
    count++;
}

main();
console.log(count);
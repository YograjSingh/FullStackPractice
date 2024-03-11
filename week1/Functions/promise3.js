const fs=require('fs');

function readFile() {
    console.log("INSIDE Readfile function"); //prints this line
    return new Promise(function(resolve) { //returns a promise object
        console.log("INside promise");  //prints this line
        fs.readFile("sample.txt","utf-8",function(err,data){ //reads the given file
            console.log("before resolve");
            resolve(data);//on resolved
        });
    })
    
}
function onDone(data) {
    console.log("After Promise"); // this gets printed first because the thread takes some time to read from the file
    console.log(data);
}
readFile().then(onDone);//restuns a promise which is resolved and on resolve, it calls a callback function named onDone
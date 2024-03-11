

const fs=require("fs");

fs.readFile("sample.txt", "utf8", function(err,data) {
    console.log("we read from sample.txt");
    console.log("Teh data in the file is ::"+data);
})

console.log("Hello this is read file programs");

function sunnyAsyncFunction(){
    return new Promise(function(resolve){
        
        setTimeout(() => {
            resolve("Hello this sunnyAsync function")
        }, 4000);

    })
}
async function main(){// async keyword makes the method asnchronous
    // let value=sunnyAsyncFunction().then(function(value){
    //     console.log(value);
    // })
// No need of .then and anything like that. Async await, makes life easy. The code above and \
// below will lead to osame output
    let value=await sunnyAsyncFunction()
    console.log("This comes after we get asyncFunction is complete");
    console.log(value)
}
main()
console.log("this statment is written after main")
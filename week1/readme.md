# Callback functions
Calling a function withing a function is called Callback function.
Below code we are somehow we are repeating ourselves
```
function square(n) {
    return n*n    
}
function cube(n) {
    return n*n*n    
}

function sumOfSquares(a,b) {
    let partA=square(a)
    let partB=square(b)
    let sum=partA+partB
    return sum    
}
function sumOfCubes(a,b) {
    return (cube(a))+(cube(b))
    
}

console.log(sumOfSquares(2,3))

```

Better approach will be using Callback Functions
```
function sumOfSomething(a,b,fn){
    let val1=fn(a)
    let val2=fn(b)
    return val1+val2
}
function square(num){
    return num*num
}
function cube(num){
    return num*num*num
}

console.log(sumOfSomething(1,2,square))
```

## Anonymous Functions
Function which does not have a name is called Anonymous function

```
function sumOfSomething(a,b,fn){
    let val1=fn(a)
    let val2=fn(b)
    return val1+val2
}
```

So, basically we defined the whole function as a 3rd parameter in the function itself, instead of defining it somewhere else and using it.
- Sync functions-> 
    1. Function come in one after in a sequence.
    2. Only one thing happen at a time.
- Async Functions-> 
    1. Opposite of Asynchronous.
    2. happens in parts.
    3. multiple thing are context switching with each other.
    4. Different threads do other tasks as we do something else.

### setTimeOut function
Syntax: setTimeOut(function_to_run, interval_after_which_to_run)
Example:
```
setTimeout(printHelloWorld, 2000)
```

### Example of Asynchronous function
```
function findSum(n){
    let sum=0;
    for(let i=0;i<n;i++){
        sum=sum+i
    }
    return sum;
}
function findSumTill100(){
    return findSum(100);
}
setTimeout(findSumTill100, 3000);
console.log("Hello from Sunny");

```
In the above mentioned code, the "Hello from Sunny" will be printed as the setTimeout runs. And then after 3 seconds, findSumTill100() will kick in. This shows behavior of Asynchrnous functions to us.
So, setTimeout() is a asynchronous function.

### Some commin JS async functions
1. setTimeout
2. fs.readFile- To read a file from file system.
3. Fetch- To fetch some data from API endpoint

### Question: What will be the output of the below code:
```
const fs=require("fs")
fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
})
console.log("Hello this is from teh code");//--->1
let a=0;
for(let i=0;i<10000000000;i++){
    a++;
}
console.log("Hi there 2");//--->2
```
Answer: Since readFile() is a asynchronous function, it will run in the background as the 1 gets printed and then the for loop will complete. If readfile is complete by then, it will be printed, followed by printing 2.

It is important to know that a even though the asynchronous function will be complete, it will wait for the main thread to complete its process before giving the output.

Pending callbacks will come later.

For example we have 2 pending functions, the one which completes before will give output first than comes the other one.


### Real use of Callbacks:
They are used in Asynchronous functions.

## Promise
Promises are used when we want to do something which takes very long in the background. 
Example: 
```
let p=new Promise((resolve, reject) =>{
    let a=1+1;
    if (a==2) {
        resolve('Success');
        
    }else{
        reject('Failed')
    }
})

p.then((message) =>{
    console.log('This is the message: '+message);
}).catch((err) =>{
    console.log('This is in the catch messageL: '+err);
})

```
Moral of the story: First complete the promise, and then do the other things whcih are passed in then()

### To understand difference between Callback functions and Promise functions
*Refer Full_Stack_Practice\week1\Functions\callback_vs_Promises.js*

Basically promise functions make life easier than Callback functions.

### Async/Await

So basically, async await removes all the syntax jargon which comes in with Promises or callback for that matter.
Let us see an example:
```
function sunnyAsyncFunction(){
    console.log("We are inside SunnyAsyncFunction");
    const prom=new Prommise((resolve)=>{
        setTimeout(()=>{resolved('This is from Resolved method')},
        4000);
    });
    return prom;
}
async function main(){
    let value=await sunnyAsyncFunction();
    console.log(value);
}
main();
console.log("This statement is written after main function is called");
``` 
1. main() is called.
2. Inside main(), value is declared and awaits a asynchronous function which returns a promise.
3. sunnyAsyncFunction is called, Promise is created and "This is from Resolved method" needs to be printed, but then there is a wait of 4 seconds as we have mentioned.
4. Now, in that time, as the wait is goingon in the setTimeout(), "This statement is written after main function is called" is printed. Because, setTimeout() is a async function right.
5. Once the 4 secs are over, value of the variable value is printed.
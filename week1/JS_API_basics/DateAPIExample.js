const currentDate=new Date();
console.log("The whole object-->"+currentDate);
console.log("The Date is -->"+currentDate.getDate());
console.log("The yeat is -->"+currentDate.getFullYear());
console.log("The seconds is -->"+currentDate.getSeconds());
console.log("The time in ms is -->"+currentDate.getTime());
console.log("Time in milliseconds since 1970:",currentDate.getMilliseconds());

// USe Case
const time=new Date();

beforeTime=time.getTime();
console.log("Before time is -->"+beforeTime)
function multiply(){
    let a=2;
    for(let i=0;i<10000000;i++){
        a=a*i;
    }
    console.log(a);
}
multiply();
afterTime=currentDate.getTime();
console.log("After time is -->"+afterTime)
let timeTaken=afterTime-beforeTime;
console.log("Time Taken is --->"+timeTaken); 
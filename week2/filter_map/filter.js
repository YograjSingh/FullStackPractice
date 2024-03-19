// filtering
// what if I tell you, given an input array, give me bacl all the even value of it
// Syntax
// array.filter(function(currentValue, index, arr), thisValue)
const array=[1,2,3,4,5,6,7,8,9,10];

const newArray=[];
array.filter((number)=>{
    if(number%2==0){
        console.log(number);
    }
});
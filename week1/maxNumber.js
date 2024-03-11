// Write a program to print the biggest number in an arrya
let array =[1,2,3,45,88,212,54,222,3231,2]
max=0;
for(let i=0;i<array.length;i++){
    if(max<array[i]){
        max=array[i];
    }
}
console.log("Highest array is:"+max);

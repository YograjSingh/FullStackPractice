// Write a program that reverses all the elements of an array
let array =[45,88,212,54,222,3231];

for (let i=0; i<array.length; i++){
    let result =0;
    while( array[i] ){
        digit = array[i] % 10  //  Get right-most digit. Ex. 123/10 → 12.3 → 3
        result = (result * 10) + digit
        array[i] = array[i]/10|0  //  Remove right-most digit. Ex. 123 → 12.3 → 12
    } 
    console.log(result)
    // revArray.push(reverse);
    
}
// console.log(revArray);
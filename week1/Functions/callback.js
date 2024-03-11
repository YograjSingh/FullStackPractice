// function square(n) {
//     return n*n    
// }
// function cube(n) {
//     return n*n*n    
// }

// function sumOfSquares(a,b) {
//     let partA=square(a)
//     let partB=square(b)
//     let sum=partA+partB
//     return sum    
// }
// function sumOfCubes(a,b) {
//     return (cube(a))+(cube(b))
    
// }

// console.log(sumOfSquares(2,3))
function sumOfSomething(a,b,callback){
    let val1=callback(a)
    console.log(val1)
    let val2=callback(b)
    console.log(val2)
    return val1+val2
}
function square(num){
    return num*num
}
function cube(num){
    return num*num*num
}

console.log(sumOfSomething(3,2,square));
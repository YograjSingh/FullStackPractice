function sumOfSomething(a,b,callback){
    let val1=callback(a)
    console.log(val1)
    let val2=callback(b)
    console.log(val2)
    return val1+val2
}

const ansSquare=sumOfSomething(2,3,function (n){
    return n*n
})
console.log(ansSquare)
const ansCube=sumOfSomething(2,3,function (n){
    return n*n*n
})
console.log(ansCube)
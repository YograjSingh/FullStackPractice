const recordVideoOne=new Promise((resolve, reject) =>{
    resolve('Video 1 Recorded')
})
const recordVideoTwo=new Promise((resolve, reject) =>{
    resolve('Video 2 Recorded')
})
const recordVideoThree=new Promise((resolve, reject) =>{
    resolve('Video 3 Recorded')
})
// All functions calls all promises
Promise.all([recordVideoOne,recordVideoTwo,recordVideoThree]).then((message)=>{
    console.log(message)
})
// print the message which is sent by the first Promise to complete
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) =>{
    console.log(message)
})

const userLeft=false;
const userWatchingCatMeme=false;

// function watchTutorialCallback(callback,errorCallback) {
//     if (userLeft) {
//         errorCallback({
//             name: 'User Left',
//             message: ':('
//         })  
//     }else if(userWatchingCatMeme) {
//         errorCallback({
//             name: 'User Watching Cat meme',
//             message: 'Sunny <Cat'
//         })
//     }else{
//         callback('Thumbs up and Subscribe');
//     }
    
// }

// watchTutorialCallback((message)=>{
//     console.log('Sucess:'+message);
// },(error)=>{
//     console.log('Error->'+error.name+' '+error.message);
// })

// Doing the same thing in promise

// const userLeft=false;
// const userWatchingCatMeme=true;

function watchtutorialPromise() {
    return new Promise((resolve,reject)=>{
        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })  
        }else if(userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat meme',
                message: 'Sunny < Cat'
            })
        }else{
            resolve('Thumbs up and Subscribe');
        }
    })
    
}
// watchtutorialPromise().then().catch()
watchtutorialPromise().then((message)=>{
    console.log('Success: '+message)
}).catch((error)=>{
    console.log('Error: '+error.name+' '+error.message);
});
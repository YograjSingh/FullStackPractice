// Create a guessing game
/*
User enter a number
System pick 1 number between 1 and 6
If user number is equal to random number, give user 2 points
If user number if different from random number by 1, give user 1 point, other wise 0 points
User can decide to play the game as long as possible

*/
const enterNumber = ()=>{
    return new Promise((resolve, reject)=>{
        const usrtNumber =Number(window.prompt("Enter a number between 1 and 6: "));
        const randomNumber =Math.floor(Math.random()*6+1);

        if(isNaN(usrtNumber)){
            reject(new Error("Wrong input type"));
        }
    });
}

const start=()=>{
    enterNumber().catch((err)=>{console.log(err);});
};

start();
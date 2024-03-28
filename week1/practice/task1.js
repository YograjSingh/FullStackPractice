/*
Scenario:
Somi promised to make cake for my birthday.
I will be happy if she makes cakes.
I will be sad if she does not make cake
Whatever happens above, I will have party.
*/
let cakeMade=false;

const onMyBirthday = (isKayoSick)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!isKayoSick) {
            resolve(1);
        }else{
            reject(0);
        }},2000);
        
    })

};

console.time('Timer');
onMyBirthday(true).then((result)=>{
    console.timeLog("Timer");
    console.log(result);
    console.log("I have "+result+"cakes");
}).catch((err)=>{
    console.log("I am sad");}
    ).finally(()=>{console.log("Party hogi")});
console.log("Hello This will get printed as we wait for promise to complete");
function calculate(){
    let principal=document.getElementById("principal");
    console.log(principal.value);
    let interest=document.getElementById("interest");
    console.log(interest.value);
    let time=document.getElementById("time");
    console.log(time.value);
    let si=(Number(principal.value)*Number(interest.value)*Number(time.value))/100;
    console.log(si);
    document.getElementById("si").innerHTML="SI is "+si;
}
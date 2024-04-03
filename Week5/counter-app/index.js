let state={
    count:0
}
function onButtonPress(){
    state.count++;
    buttonComponentReRender();
}
function buttonComponentReRender(count){
    document.getElementById("buttonParent").innerHTML="";
    const component = buttonComponent(state.count);
    document.getElementById("buttonParent").appendChild(component);
    // const compo
}

function buttonComponent(count){
    const button=document.createElement("button");
    button.innerHTML=`Counter ${count}`;
    button.setAttribute("onclick",'onButtonPress()');
    return button;
}

buttonComponentReRender();


/*
function buttonStateChange(){
    let counterContent=document.getElementById("counter").innerHTML;
    let arr=counterContent.split(" ");
    arr[1]=parseInt(arr[1])+1;
    document.getElementById("counter").innerHTML=arr[0]+" "+arr[1];
}
*/
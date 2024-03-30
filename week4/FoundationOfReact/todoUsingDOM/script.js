let id=1;
function addToDo() {
    let title = document.getElementById("title").value;
    console.log(title);
    let description = document.getElementById("description").value;
    console.log(description);
    createChild(title, description,id++)


}
function createChild(title, description,id) {
    let child = document.createElement("div");
    let titleElement = document.createElement("div");
    titleElement.innerHTML = title;
    console.log("TItle elemnet:"+titleElement.innerHTML);
    let descriptionElement=document.createElement("div");
    descriptionElement.innerHTML=description;
    let buttonElement=document.createElement("button");
    buttonElement.innerHTML="Mark as done";
    buttonElement.setAttribute("onClick",`markAsDone(${id})`);
    child.setAttribute("id",id);
    child.appendChild(titleElement);
    child.appendChild(descriptionElement);
    child.appendChild(buttonElement);
    console.log(child.innerHTML);
    addToParent(child);


}
function addToParent(child) {
    // let a=
    document.getElementById("taskList").appendChild(child);
    // return a;
}
function markAsDone(id) {
    const task=document.getElementById(id);
    task.children[2].innerHTML="Done";
}
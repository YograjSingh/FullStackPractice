import { useState } from "react";
export function CreateTodo(){
	// This is a state variable which we will use to get value from the current
	// input field.
	const [title,setTitle]= useState("");
	const [description,setDescription]=useState("");
	return <div>
	<h1>Hello</h1>
		<input id="title"
		style={{ 
			padding: 10,
			margin: 10
		}}
		type="text" placeholder="Enter title" onChange={function(e){
			const tvalue=e.target.value;
			console.log("Hello "+tvalue);
			setTitle(tvalue);
			console.log(title);
		}}></input><br/>

		<input id="desc" 
		style={{ 
			padding: 10,
			margin: 10
		}}
		type="text" placeholder="Enter description" onChange={function(e){
			const dvalue=e.target.value;
			setDescription(dvalue);
			console.log(dvalue);
		}}></input><br/>
 <button style={{
            padding: 10,
            margin: 10
        }} 
		onClick={() => {
            // axios
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description,
					completed: false
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(async function(res) {
                    const json = await res.json();
                    alert("Todo added");
                })
        }}>Add a todo</button>
		</div>
}

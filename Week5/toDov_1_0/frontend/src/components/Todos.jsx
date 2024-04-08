import { useState } from "react"

export function Todos({todos}){
    const [complete, setComplete]=useState("");


    return <div>
        {
            todos.map(function(todo) {
            return <div>
            <h1>Hello</h1>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })
        }
    </div>

}
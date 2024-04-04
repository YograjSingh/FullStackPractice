import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/* to do application
State of an appliucation 
todo
 {
    todos:[{title:"todo1",
            description:"First code",
            completed":false
          }]
 }


*/
function App() {
  const [todos, setTodos]=useState([{
    title:"Goi to gym",
    description: "N3 pushups",
    completed:false
  },
  {
    title:"Goi to gym",
    description: "N3 pushups",
    completed:false
  }
]);

  return (

    <div>
{/* This is redundant and not efficient
        <TodoApp title="Gym" description="5 times"></TodoApp>
        <TodoApp title="Gym" description="5 times"></TodoApp>
        <TodoApp title="Gym" description="5 times"></TodoApp> */}
        {todos.map(function(todo){
          return <TodoApp title={todo.title} description={todo.description} completed={todo.completed}></TodoApp>
        })}
    
    
    </div>
  )
}
function TodoApp(props){
  return <div>
  <h3>props.title</h3>
  <li>props.description</li>
  <li>props.completed</li>
  </div>
}

export default App

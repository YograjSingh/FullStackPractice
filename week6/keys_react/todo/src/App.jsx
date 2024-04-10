import { useState } from 'react'
import { Todo } from './components/Todo'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      title:"gym",
      description:"40 pushup"
    },
    {
      id:2,
      title:"title2",
      description:"desc2"
    },
    {
      id:3,
      title:"title3",
      description:"description3"
    }

  ])
  let count=4
  function addATodo(){
    setTodos([...todos,{
      id:count++,
      title:Math.random(),
      description:Math.random()
    }])
  }

  return (
    <div>
    <button onClick={addATodo}>Click here to add Task</button>
    {todos.map(todo =><Todo key={todo.id} title={todo.title} description={todo.description}></Todo>)}
    </div>
  )
  
}



export default App

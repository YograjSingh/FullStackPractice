import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() =>{
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
    .then(async function(response) {
      const json=await response.json();
      setTodos(json.todos);
    })
    }, 2000);

    
  },[])

  return (
    <div>
    {todos.map(todo=><Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
  )
}
function Todo({title,description}){
  return <div>
  <h1>{title} and description is {description}</h1> 
  </div>
}

export default App

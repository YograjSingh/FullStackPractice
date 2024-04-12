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
    <h2>This is a dummy feature in the master branch</h2>
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

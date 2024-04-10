import { useState } from 'react'
import React from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState("Sunny");
  function updateTitle(){
    setTitle("My name is "+Math.random());
  }
  return (
   <div>
   <button onClick={updateTitle}> Click on me to change title</button>
   <Header title={title}></Header>
   <Header title="This is component 2"></Header>
   <Header title="This is component 3"></Header>
   <Header title="This is component 3"></Header>
   <Header title="This is component 3"></Header>
   <Header title="This is component 3"></Header>

  
   </div>
  )
}

const Header=React.memo(function Header({title}){
  return <div>
    {title}
  </div>
})

export default App

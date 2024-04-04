import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// let state={
//   count:0
// }

function App() {
  const [count,setCount]=useState(0);
  function conClickHandler() {
    // state.count++;
    console.log(count);
    console.log(setCount);
    // Below is not the correct way to set state variable
    // count=count+1
    setCount(count+1);
  }
  

  return (
    <div>
      <button onClick={conClickHandler}>Counter {count}</button>
    </div>
  )
}

export default App

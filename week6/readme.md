# Creating a react app
1. Header component that takes title as a prop and renders it inside a div.
2. Top level App component renders 2 Headers.

# Update the last app to allow to update the title of the first hHeader with a new title.


## Re-rendering in React
1. Helps to create Dynamic websites.
2. We append or remove or update at a DOM is called dynamic.
3. This is what React helps us to do.
4. **Rule of Thumb**: Minimize the number of re renders

But the code below will cause all the components to render again and again:
```
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState("Sunny");
  function updateTitle(){
    setTitle("My name is "+Math.random())
  }
  return (
   <>
   {/* Here all these functions gets re rendered together everytime the state changes.
   This can cause problems and slowlness in big applications */}
   <button onClick={updateTitle}>click here to change the title</button>
   <br></br><br></br>
   <Header title={title}></Header>
   <Header title="Hello2"></Header>
   <Header title="Hello2"></Header>
   <Header title="Hello2"></Header>

   </>
  )
}

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
```



## Re-Render
React did something to calculate what all got updated in the component.
### When does this happen?
- It happens when a state variable that is being used in a component changes.
- It happens when parent component re-renders, it causes all the child components to re render

## How to minimize the number of Re-rendering in REACT?
1. We push the state down.

### Approach 1
**Solution:** We push the state down.

**
Tip: In my cases, we will get a situation where a component will have child components. And these child components will further have child components. *Rule is, if you want to change the state of a child component, declare the state variable affecting it in the latest parent.* **
```
import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState("Sunny");
  // function updateTitle(){
  //   setTitle("My name is "+Math.random())
  // }
  return (
   <>
   <HeaderWithButton/>
   <Header title="This is component 2"></Header>
   <Header title="This is component 3"></Header>
   </>
  )
}

function HeaderWithButton(){
  const [title, setTitle] = useState("My name is Sunny");

  function updateTitle(){
    setTitle("My name is "+Math.random())
  }
  return <div>
  <button onClick={updateTitle}> Click on me to change title</button>
    <Header title={title}></Header>
  </div>
}
function Header({title}){
  return <div>
    {title}
  </div>
}

export default App


````

Basically only the child component which needs to have the re rendering will have the state. And only that child will change and not the whole parent component. 

### Approach 2- Using memo
Memo lets us skip re-rendering a component when its props are unchanged.
'''
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


'''


## React Keys
- These are neede for react to understand vcarious contents in an array.
- Helps it to understand which element to move, update or do something specific in a DOM. 
- More info: [click here](https://www.geeksforgeeks.org/reactjs-keys/)

Example:
```
{todos.map(todo =><Todo key={todo.id} title={todo.title} description={todo.description}></Todo>)}
```
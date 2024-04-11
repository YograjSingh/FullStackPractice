import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    
    <div>
    {/* another component is passsed as a parameter here */}
      <br></br>
      <CardWrapper><div>Hello this is without component</div></CardWrapper>
      <br></br>
      {/* <CardWrapper innerComponent={<TextComponent/>}></CardWrapper> */}
      <CardWrapper>
      <ParagraphComponent/>
      </CardWrapper>


      
    </div>
  )
  function TextComponent(){
    return <div>Hi there from the text component!</div>
  }
  function ParagraphComponent(){
    return <p>This is a paragraph.Lorem ipsum dolor sit amet, consectetur</p>
  }
  function CardWrapper({children}){
    // create a adiv which has a border
    // and inside a div, renders a prop
    return <div style={{border:"2px dotted black"}}>
    {children}
       {/* <h1> {innerComponent}</h1> */}
    </div>
  }
}

export default App

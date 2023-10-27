import { useState } from 'react'
// import Math from Math
import './App.css'

function App() {
  const [Counter, setCounter] = useState(0)

  // let Counter = 5;
  const add = () => {
    if(Counter < 20){

      console.log("Value added", Counter+1);
      setCounter(Counter + 1);
    }
  }
  const remove = () => {
    if(Counter > 0){
      setCounter(Counter - 1);
      console.log("Value removed", Counter-1);
      }
    
  }
  return (
    <>
      <h1>Coffee with code</h1>
      <h2>Counter value : {Counter}</h2>

      <button onClick={add}>Add Value</button>
      <br />
      <button onClick={remove}>remove Value</button>
    </>
  )
}

export default App

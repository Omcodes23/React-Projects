import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'
function App() {
  const [count, setCount] = useState(0)
  let arr = [1,2,3,4]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>TailWind Test</h1>
      <Card username='om'  arr = {arr} />
      <Card username='jay'  dis = "This jay   " />
      <Card  />


    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import useStore from './store/store'

function App() {
  const [value,setValue]=useState<string>()
  const bear = useStore((state) => state.bears)
  const increasePopulation = useStore((state) => state.increasePopulation)
  const updateBears= useStore((state)=>state.updateBears)
  return (
    <>
      {bear}
      <button onClick={increasePopulation}>+</button>
      <input type="text" onChange={(value)=>setValue(value.target.value)} />
    </>
  )
}

export default App

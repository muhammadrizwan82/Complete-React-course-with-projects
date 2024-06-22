import { useState } from 'react'
import './App.css'


function countInitial() {
  console.log('run function 1');
  return 0
}
function App() {

  const [Counter, setCounter] = useState(() => countInitial())

  const addValue = () => {

    setCounter(prevCount => {
      return prevCount < 20 ? prevCount + 1 : prevCount
    })

  }

  const deleteValue = () => {
    setCounter(prevCount => {
      return prevCount > 0 ? prevCount - 1 : prevCount
    })
  }

  return (
    <>

      <h1>Counter Project</h1>
      <div>
        <button className="button" onClick={addValue}>+</button>
        <span className="span">{Counter}</span>
        <button className="button" onClick={deleteValue}>-</button>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'


function App() {
  const [color, setColor] = useState("")
  function ChangeColor(color) {
    setColor(color)
  }
  return (
    <>
      <div className="w-full h-screen  box-shadow duration-200" style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-lg px-2 py-2'>
            <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg font-bold' style={{ backgroundColor: "red" }} onClick={() => { ChangeColor("red") }}>
              Red
            </button>
            <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg font-bold' style={{ backgroundColor: "green" }} onClick={() => { ChangeColor("green") }}>
              Green
            </button>
            <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg font-bold' style={{ backgroundColor: "Yellow" }} onClick={() => { ChangeColor("Yellow") }}>
              Yellow
            </button>
            <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg font-bold' style={{ backgroundColor: "blue" }} onClick={() => { ChangeColor("blue") }}>
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

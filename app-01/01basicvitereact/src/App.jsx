import { useState } from 'react'
import Student from './Student'

function App() {
  const [count, setCount] = useState(0)
  // Get the current date and time
  const todayDate = new Date();

  // Convert to UTC
  const utcDate = new Date(todayDate.toUTCString());

  // Convert to Pakistan Standard Time (UTC+5)
  const pakistanTimeOffset = 10; // PST is UTC+5
  const pakistanTime = new Date(utcDate.setHours(utcDate.getHours() + pakistanTimeOffset));
  console.log(pakistanTime)
  const myName = 'Muhammad Rizwan'
  return (
    <>
      <h1>Hello {pakistanTime.toLocaleString()}</h1>
      <Student />
    </>
  )
}

export default App

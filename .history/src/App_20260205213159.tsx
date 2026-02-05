import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  return (
    <>
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card flex gap-6">
        <button onClick={handleIncrement}>
          <span className="read-the-docs">
           Increment 
          </span>
        </button>
        <h1> {count} </h1>
         <button onClick={handle}>
          <span className="read-the-docs">
           Decrement 
          </span>
        </button>
      
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

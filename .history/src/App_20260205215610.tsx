
import './App.css'
import useCounter from './hooks/useCounter'

function App() {
const { count, handleIncrement, handleDecrement,handleReset } = useCounter()

  return (
    <>
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card flex gap-6">
      <div>
          <button onClick={handleIncrement}>
          <span className="read-the-docs">
           Increment 
          </span>
        </button>
      </div>
        <div>
          <h1> {count} </h1>
        </div>
         <div>
          <button onClick={handleDecrement}>
          <span className="read-the-docs">
           Decrement 
          </span>
        </button>
         </div>

       <div>
         <button onClick={handleReset}>
          <span className="read-the-docs">
           Reset 
          </span>
        </button>
       </div>
      
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

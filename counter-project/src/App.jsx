import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter value: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <br />
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <br />
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </>
  )
}

export default App
